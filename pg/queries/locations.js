
// NOTE: schema name is mandatory with pg library. More information about that in PostgresPool.js
module.exports.getDescriptionById=  function(locale)
{

  

  var query = 
    `SELECT 
      loc.id as id,
      loc.desc_data -> 'description'-> '${locale}' AS description,
      loc."name" as "name",
      array_agg(json_build_object('index',desc_ref.desc_index, 'id',loc_ref.ref_loc_id, 'name',loc2."name", 'type', 1)) as "refs"
              FROM 
        abbadiapasseggiate.locations as loc
      LEFT OUTER JOIN 
        (
        abbadiapasseggiate.desc_references as desc_ref
          inner join
        abbadiapasseggiate.locations_desc_referecens as loc_ref
          on
        desc_ref.id = loc_ref.desc_ref_id
          inner join 
        abbadiapasseggiate.locations as loc2 
          on
        loc_ref.ref_loc_id = loc2.id)  
      ON 
        desc_ref.main_loc_desc_ref = loc.id
    WHERE 
      loc.id = $1
    GROUP BY loc.id;`;
    

  return query;
}

module.exports.getTrailsByLocationId = function(locale)
{
  return `SELECT   
            tr.trail_id as id,
            tr."name" as "name",
            tr.gpx_name as gpx,
            tr.rating as rating,
            tr."level" as "level",
            tr.${locale}_descr as descr
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

