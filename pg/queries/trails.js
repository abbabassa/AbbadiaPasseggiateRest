
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

  return `WITH desc_view
  AS (
    SELECT descriptions.desc_id AS desc_id
      ,array_agg(json_build_object('index', desc_ref.desc_index, 'id', loc_ref.ref_loc_id, 'name', loc."name", 'type', 1)) AS "refs"
    FROM abbadiapasseggiate.trails_descriptions AS descriptions
    LEFT OUTER JOIN (
      abbadiapasseggiate.desc_references AS desc_ref INNER JOIN abbadiapasseggiate.locations_desc_referecens AS loc_ref
        ON desc_ref.id = loc_ref.desc_ref_id
      INNER JOIN abbadiapasseggiate.locations AS loc
        ON loc_ref.ref_loc_id = loc.id
      )
      ON desc_ref.main_trail_desc_ref = descriptions.desc_id
    WHERE desc_ref.desc_index IS NOT NULL
    GROUP BY descriptions.desc_id
    )
    ,desc_view2
  AS (
    SELECT descriptions2.desc_id AS desc_id
      ,array_agg(json_build_object('index', desc_ref2.desc_index, 'id', trail_ref.ref_trail_id, 'name', trails."name", 'type', 2)) AS "refs"
    FROM abbadiapasseggiate.trails_descriptions AS descriptions2
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
  SELECT json_build_object('id', trail0.trail_id, 'name', trail0."name", 'level', trail0."level", 'rating', trail0.rating, 'stepsLayerName', trail0.steps_layer_name, 'intersectionsLayerName', trail0.intersections_layer_name, 'pars', array_agg(CASE 
          WHEN descriptions0.main_descr
            THEN json_build_object('description', transl."translation", 'parIndex', descriptions0."index", 'ref', desc_view.refs || desc_view2.refs || '{}')
          ELSE NULL
          END)) AS "mainData"
    ,array_agg(CASE 
        WHEN descriptions0.main_descr
          THEN NULL
        ELSE json_build_object('description', transl."translation", 'ref', desc_view.refs || desc_view2.refs || '{}', 'mainTrailsId', trail0.trail_id, 'parIndex', descriptions0."index", 'featureId', descriptions0.feature_id, 'intersectionFeatureIds', descriptions0.intersection_features_id)
        END) AS "pars"
  FROM abbadiapasseggiate.trails AS trail0
  INNER JOIN abbadiapasseggiate.trails_descriptions AS descriptions0
    ON descriptions0.trail_id = trail0.trail_id
  INNER JOIN abbadiapasseggiate.translations AS transl
    ON descriptions0.transl_id = transl.transl_id
      AND transl.locale = '${ locale}'
  LEFT OUTER JOIN desc_view
    ON descriptions0.desc_id = desc_view.desc_id
  LEFT OUTER JOIN desc_view2
    ON descriptions0.desc_id = desc_view2.desc_id
  WHERE trail0.trail_id = $1
  GROUP BY trail0.trail_id;`
}

module.exports.getPhotosByTrailAndFeatureIds = function(locale)
{
  return `SELECT 
            -1 as id,
            photo.guid as photoName,
            intersection_photo.trail_id as "trailId",
            intersection_photo.feature_id as "featureId",
            'Info' as title,
            intersection_photo.description-> 'desc'-> '${locale}' as description,
            photo."type" as "type",
            photo.ext as ext
          FROM
            abbadiapasseggiate.inter_photo photo,
            abbadiapasseggiate.intersection_inter_photo intersection_photo
          where 
            intersection_photo.photo_guid = photo.guid and
            intersection_photo.trail_id = $1 and
            intersection_photo.feature_id = $2;`
}