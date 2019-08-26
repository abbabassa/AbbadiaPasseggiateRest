
// NOTE: schema name is mandatory with pg library. More information about that in PostgresPool.js
module.exports.getTrailHeaderData = function(locale)
{
  return  `select 
            tr.trail_id as id,
            tr."name" as "name",
            tr."level" as "level",
            tr.${locale}_descr as mainDescr
          from 
            abbadiapasseggiate.trails as tr 
          where 
            tr.trail_id = $1;`
}

/** Seriously? */
module.exports.getTrailData= function(locale)
{
  locale = `'${locale}'`;
  return `WITH desc_view
        AS (
        SELECT descriptions.desc_id AS desc_id
          ,array_agg(json_build_object('index', desc_ref.desc_index, 'id', loc_ref.ref_loc_id, 'name', loc."name", 'type', 1)) AS "refs"
        FROM  abbadiapasseggiate.trails_descriptions as descriptions 
        LEFT OUTER JOIN (
          abbadiapasseggiate.desc_references AS desc_ref INNER JOIN abbadiapasseggiate.locations_desc_referecens AS loc_ref
          ON desc_ref.id = loc_ref.desc_ref_id
          INNER JOIN abbadiapasseggiate.locations AS loc
          ON loc_ref.ref_loc_id = loc.id
          )
          ON desc_ref.main_trail_desc_ref= descriptions.desc_id
        WHERE desc_ref.desc_index IS NOT NULL
        GROUP BY descriptions.desc_id
        )
        ,desc_view2
        AS (
        SELECT descriptions2.desc_id AS desc_id
          ,array_agg(json_build_object('index', desc_ref2.desc_index, 'id', trail_ref.ref_trail_id, 'name', trails."name", 'type', 2)) AS "refs"
        FROM abbadiapasseggiate.trails_descriptions as descriptions2
        LEFT OUTER JOIN (
          abbadiapasseggiate.desc_references AS desc_ref2 INNER JOIN abbadiapasseggiate.trails_desc_references AS trail_ref
          ON desc_ref2.id = trail_ref.desc_ref_id
          INNER JOIN abbadiapasseggiate.trails AS trails
          ON trail_ref.ref_trail_id = trails.trail_id
          )
          ON desc_ref2.main_trail_desc_ref = descriptions2.desc_id
        WHERE desc_ref2.desc_index IS NOT NULL
        GROUP BY descriptions2.desc_id
        )
        SELECT 
        json_build_object(
                  'id', trail0.trail_id,
                  'name', trail0."name",
                  'level', trail0."level",
                  'rating', trail0.rating,
                  'stepsLayerName', trail0.steps_layer_name,
                  'intersectionsLayerName', trail0.intersections_layer_name,
                  'pars', array_agg(
                      case when descriptions0.main_descr then 
                        json_build_object(
                        'description', descriptions0.descr, 
                        'parIndex', descriptions0."index",
                        'ref', desc_view.refs || desc_view2.refs || '{}' )
                      else  null
                      end) 
        ) as "mainData"
        ,array_agg(
        case when descriptions0.main_descr then null
          else json_build_object(
                      'description', descriptions0.descr, 
                      'ref', desc_view.refs || desc_view2.refs || '{}', 
                      'mainTrailsId', trail0.trail_id, 
                      'parIndex', descriptions0."index",
                      'featureId', descriptions0.feature_id)
          end) AS "pars"
        FROM abbadiapasseggiate.trails AS trail0
        INNER JOIN abbadiapasseggiate.trails_descriptions as descriptions0
        on descriptions0.trail_id = trail0.trail_id
        LEFT OUTER JOIN desc_view
        ON descriptions0.desc_id = desc_view.desc_id
        LEFT OUTER JOIN desc_view2
        ON descriptions0.desc_id = desc_view2.desc_id
        WHERE trail0.trail_id = $1
        and descriptions0.locale = ${locale}
        group by trail0.trail_id;`
}

