var express = require('express');
var router = express.Router();
var pool= require('../pg/PostgresPool')
var locationsQueries = require('../pg/queries/locations')


router.get('/map/:locale/:id', function(req, res, next) {
  pool.query(locationsQueries.getDescriptionById(req.params.locale),
   [req.params.id])
  .then(qResult=>{
    res.locals.locRes={};
    if (qResult.rows.length == 0)
    {
      res.locals.locRes.locData = null;
      next();
      return;
    }

    
  
    
    res.locals.locRes.locData = qResult.rows[0];

    next();
  })
  .catch(err=> {
    console.log(err);
    next(err)
  });
}, function(req,res, next){
  pool.query(locationsQueries.getTrailsByLocationId(req.params.locale),
    [req.params.id])
  .then(qResult=>{
    res.locals.locRes.trailData= qResult.rows ;
    next()
  })
  .catch(err=> next(err));
}, 
  getPhotoData,
function(req,res,next){
  res.json(res.locals.locRes);
});



function getPhotoData(req,res, next)
{
  pool.query(locationsQueries.getPhotosByLocationId(req.params.locale),
    [req.params.id])
  .then(qResult=>{
    res.locals.locRes.imagesData= qResult.rows ;
    next()
  })
  .catch(err=>{ next(err)});
}

module.exports = router;
