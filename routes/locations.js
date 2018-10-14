var express = require('express');
var router = express.Router();
var pool= require('../pg/postgresPool')
var locationsQueries = require('../pg/queries/locations')


router.get('/map/:locale/:id', function(req, res, next) {
  pool.query(locationsQueries.getDescriptionById(req.params.locale),
   [req.params.id])
  .then(qResult=>{
    res.locals.qResult=qResult;
    next();
  })
  .catch(err=> next(err));
}, function(req,res,next){
  res.json(res.locals.qResult && res.locals.qResult.rows.length >0 ? res.locals.qResult.rows[0] : "Nessun risultato")
});

module.exports = router;
