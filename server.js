var express = require('express');
var app = module.exports.app = exports.app = express();

var dotenv = require('dotenv');
dotenv.load();

app.use(require('connect-livereload')());

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});



var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});