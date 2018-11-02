var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');

var locations = require('./routes/locations');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors()); 
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/map', express.static(path.join(__dirname, 'public/dist')));
app.use('/', express.static(path.join(__dirname, 'public/dist')));

app.use('/en/map', express.static(path.join(__dirname, 'public/dist/en')));
app.use('/en', express.static(path.join(__dirname, 'public/dist/en')));

app.use('/tiles/trasCTR',express.static(path.join(__dirname, 'Tiles/GeoBaseTras')));
app.use('/tiles/trasAP',express.static(path.join(__dirname, 'Tiles/GeoMeshTras')));
app.use('/vector',express.static(path.join(__dirname, 'Vectors')));

app.use('/services/locations', locations);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
