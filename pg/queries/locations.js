
// NOTE: schema name is mandatory with pg library. More information about that in PostgresPool.js
module.exports.getDescriptionById=  function(locale)
{

  
  var query =
  `WITH loc_view
  AS (
    SELECT loc.id AS id
      ,array_agg(json_build_object('index', desc_ref.desc_index, 'id', loc_ref.ref_loc_id, 'name', loc2."name", 'type', 1)) AS "refs"
    FROM abbadiapasseggiate.locations AS loc
    LEFT OUTER JOIN (
      abbadiapasseggiate.desc_references AS desc_ref INNER JOIN abbadiapasseggiate.locations_desc_referecens AS loc_ref
        ON desc_ref.id = loc_ref.desc_ref_id
      INNER JOIN abbadiapasseggiate.locations AS loc2
        ON loc_ref.ref_loc_id = loc2.id
      )
      ON desc_ref.main_loc_desc_ref = loc.id
    WHERE loc.id = $1
      AND desc_ref.desc_index IS NOT NULL
    GROUP BY loc.id
    )
    ,loc_view2
  AS (
    SELECT loc3.id AS id
      ,array_agg(json_build_object('index', desc_ref2.desc_index, 'id', trail_ref.ref_trail_id, 'name', trails."name", 'type', 2, 'oldLink', trails.old_link)) AS "refs"
    FROM abbadiapasseggiate.locations AS loc3
    LEFT OUTER JOIN (
      abbadiapasseggiate.desc_references AS desc_ref2 INNER JOIN abbadiapasseggiate.trails_desc_references AS trail_ref
        ON desc_ref2.id = trail_ref.desc_ref_id
      INNER JOIN abbadiapasseggiate.trails AS trails
        ON trail_ref.ref_trail_id = trails.trail_id
      )
      ON desc_ref2.main_loc_desc_ref = loc3.id
    WHERE loc3.id = $1
      AND desc_ref2.desc_index IS NOT NULL
    GROUP BY loc3.id
    )
  SELECT loc0.id AS id
    ,loc0.desc_data -> 'description' -> '${locale}' AS description
    ,loc0."name" AS "name"
    ,loc_view.refs || loc_view2.refs || '{}' AS refs
  FROM abbadiapasseggiate.locations AS loc0
  LEFT OUTER JOIN loc_view
    ON loc0.id = loc_view.id
  LEFT OUTER JOIN loc_view2
    ON loc0.id = loc_view2.id
  WHERE loc0.id = $1;`;
    

  return query;
}

module.exports.getTrailsByLocationId = function(locale)
{
  return `SELECT   
            tr.trail_id as id,
            tr."name" as "name",
            2 as type,
            0 as index
          FROM  
            abbadiapasseggiate.trails tr, 
            abbadiapasseggiate.trails_locations tr_lc
          WHERE 
            tr.trail_id= tr_lc.trail_id AND
            tr_lc.location_id= $1;`
}


module.exports.getPhotosByLocationId = function(locale)
{
  return `SELECT 
            photos.id as id,
            photos.file_path as photoName,
            photos.location_id as locId,
            photos.title as title,
            photos.description-> 'desc'-> '${locale}' as description,
            photos.type as type,
            photos.ext as ext
          FROM
            abbadiapasseggiate.photos
          where 
            photos.location_id = $1
          ORDER BY
            photos.rating DESC
          LIMIT 5;`
}

