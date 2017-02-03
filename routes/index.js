var express = require('express');
var app = express();


var data = {count:0};


app.get('/',function(req,res){
  data.count++;
  res.render('index',data);
});
