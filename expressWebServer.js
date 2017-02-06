var http = require("http"),
    express = require("express"),
    path = require("path"),
    app = express(),
    engine = require('ejs-locals'),
    server = http.createServer(app);

var routes = require("./routes");

app.engine('ejs', engine);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(routes);

var ip = "localhost";
var port = 5000;


server.listen(port, ip, function() {
    var addr = server.address();
    console.log(`Server listening at ${ip}:${port}`);
});
