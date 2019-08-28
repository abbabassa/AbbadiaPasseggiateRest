var express = require('express');
var router = express.Router();
var pool= require('../pg/PostgresPool')
var trailsQueries = require('../pg/queries/trails')


router.get(('/map/:locale/intersection/:trail_id/:feature_id'), function(req, res, next)
{
  pool.query(trailsQueries.getPhotosByTrailAndFeatureIds(req.params.locale), 
    [req.params.trail_id, req.params.feature_id])
  .then(qResult => {
    res.json(qResult.rows);
  });
});

router.get('/map/:locale/:id', function(req, res, next) {
  pool.query(trailsQueries.getTrailData(req.params.locale),
   [req.params.id])
  .then(qResult=>{
    res.locals.trailRes={};
    if (qResult.rows.length == 0)
    {
      res.locals.trailRes = null;
      next();
      return;
    }

    
  
    
    res.locals.trailRes = qResult.rows[0];

    next();
  })
  .catch(err=> {
    console.log(err);
    next(err)
  });
 },

function(req,res,next){
  try
  {
    res.locals.trailRes.pars = res.locals.trailRes.pars.filter(par => par != null).sort((par1, par2 )=> par1.parId - par2.parId );
    res.locals.trailRes.mainData.pars = res.locals.trailRes.mainData.pars.filter(par => par != null).sort((par1, par2) => par1.parId - par2.parId );
    res.json(res.locals.trailRes);
  }catch(error)
  {
    next(error)
  }
});




module.exports = router;
