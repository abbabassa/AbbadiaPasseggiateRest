var express = require('express');
var router = express.Router();
var path = require('path');

// basepath to public/dist to download js and css files (according to application basepath)

// first of all /en is checked, if there is a static file with the same path is returned. If not / is checked (for italian)
// Note. When these are called with \map;loc=1; trails=0.... or \en\map;loc=1... a static file with that name is searched but not found, so the control
// can pass to the next middleware

// that's for not interfering with angular static files request => best option è to search first for static files, only in case appy logics
router.use('/en',express.static(path.join(__dirname, '../public/dist/en')));
router.use('/',express.static(path.join(__dirname, '../public/dist')));


// express seems to have some problem with Angular notation for optional parameters and secondary outlet.
// if the path is suitable for parameters in the map/secondary outlet in the map, then the index.html will be loaded.
// Then the parameters/secondary outlets path will be resolved by Angular router
router.use(function(req,res,next) {
  const regex = /\/en\/map(?:;\w+=\w+)*(?:\(\w+:\w+(?:\/\d)*\))*/gm;
  var appCompatiblePath =   req.originalUrl.match(regex);
  if(appCompatiblePath && appCompatiblePath.length > 0)
  {
    res.sendFile(path.join(__dirname, '../public/dist/en/index.html'));
  }
  else
  {
    next();
  }
  
});

router.use(function(req,res,next) {
  const regex = /\/map(?:;\w+=\w+)*(?:\(\w+:\w+(?:\/\d)*\))*/gm;
  var appCompatiblePath =   req.originalUrl.match(regex);
  if(appCompatiblePath && appCompatiblePath.length > 0)
  {
    res.sendFile(path.join(__dirname, '../public/dist/index.html'))
  }
  else
  {
    next();
  }
  
});




module.exports = router;

