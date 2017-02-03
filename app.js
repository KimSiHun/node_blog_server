var express=require('express');
var app = express();
var http = require('http');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var engine = require('ejs');

var router = require('./routes');

app.set('port', 3000);
app.set('views', path.join(__dirname,'/views'));
app.set('view engine', 'ejs');


if('development' == app.get('env')){
  app.use(express.errorHandler());
}


http.createServer(app).listen(app.get('port'), function(){
  console.log(`Express Server listening on port ${app.get('port')}`);
});
