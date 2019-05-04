var express = require('express');
var router = express.Router();
var pool= require('../pg/PostgresPool')
var locationsQueries = require('../pg/queries/locations')



router.get('/map/:locale/:id', function(req, res, next) {
  pool.query(locationsQueries.getDescriptionById(req.params.locale),
   [req.params.id])
  .then(qResult=>{
    res.locals.locRes={};
    res.locals.locRes.locData=qResult.rows.length>0? qResult.rows[0] : null;
    next();
  })
  .catch(err=> next(err));
}, function(req,res, next){
  pool.query(locationsQueries.getTrailsByLocationId(req.params.locale),
    [req.params.id])
  .then(qResult=>{
    res.locals.locRes.trailData= qResult.rows ;
    next()
  })
  .catch(err=>{ console.log(err); next(err)});
}, function(req,res,next){
  res.json(res.locals.locRes);
});

router.get('/', function(req, res, next) {
  res.locals.locRes= 
  [
    {
    Name:"prova",
    Id:1,
    Photos: []
    },
    {
      Name:"prova2",
      Id:2,
      Photos: [{
        Name:"photo1",
        Path:"nonDovreiSaperloIo"
      }]
      }
   ]
  res.json(res.locals.locRes);
});

module.exports = router;
