
module.exports.getDescriptionById=  function(locale)
{
    return `SELECT desc_data -> 'description'-> '${locale}' AS description
      FROM abbadiapasseggiate.locations WHERE id = $1 and desc_data -> 'description' ? '${locale}';`
}


