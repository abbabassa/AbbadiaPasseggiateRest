
module.exports.getDescriptionById=  function(locale)
{
    return `SELECT desc_data -> 'description'-> '${locale}' AS description
      FROM abbadiapasseggiate.locations WHERE id = $1 and desc_data -> 'description' ? '${locale}';`
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


