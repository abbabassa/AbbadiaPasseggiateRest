var express = require('express');
var router = express.Router();
var path = require('path');

// basepath to public/dist to download js and css files (according to application basepath)
router.use('/', express.static(path.join(__dirname, '../public/dist')));
router.use('/en', express.static(path.join(__dirname, '../public/dist/en')));

// express seems to have some problem with Angular notation for optional parameters and secondary outlet.
// if the path is suitable for parameters in the map/secondary outlet in the map, then the index.html will be loaded.
// Then the parameters/secondary outlets path will be resolved by Angular router
router.use(function(req,res,next) {
  const regex = /\/map(?:;\w+=\w+)*(?:\(\w+:\w+(?:\/\d)*\))*/gm;
  var appCompatiblePath =   req.originalUrl.match(regex);
  if(appCompatiblePath && appCompatiblePath.length > 0)
  {
    next()
  }
  else
  {
    next('route');
  }
  
}, 
function(req,res,next)
{
  res.sendFile(path.join(__dirname, '../public/dist/index.html'))
});


router.use(function(req,res,next) {
  const regex = /\/en\/map(?:;\w+=\w+)*(?:\(\w+:\w+(?:\/\d)*\))*/gm;
  var appCompatiblePath =   req.originalUrl.match(regex);
  if(appCompatiblePath && appCompatiblePath.length > 0)
  {
    next()
  }
  else
  {
    next('route');
  }
  
}, 
function(req,res,next)
{
  res.sendFile(path.join(__dirname, '../public/dist/en/index.html'))
});

module.exports = router;

