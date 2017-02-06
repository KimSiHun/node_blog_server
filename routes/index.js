var express = require("express");
var router = express.Router();

var data = 0;

router.get('/', function(req, res) {

    data++;
    res.render("index.ejs", {
        count: data
    });
});

router.get('/test',function(req,res){
  res.send('Hello');
})


module.exports = router;
