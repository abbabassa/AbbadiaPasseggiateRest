
module.exports.getDescriptionById=  function(locale)
{
    return `SELECT 
              id as id,
              desc_data -> 'description'-> '${locale}' AS description,
              "name" as "name"
            FROM abbadiapasseggiate.locations WHERE id = $1;`
      //FROM abbadiapasseggiate.locations WHERE id = $1 and desc_data -> 'description' ? '${locale}';`
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

