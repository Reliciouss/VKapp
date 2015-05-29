var express = require('express');

module.exports = function(app, io){
  app.set('view engine', 'jade');
  app.set('views', './views');
  
  app.use(express.static('./public'));
};