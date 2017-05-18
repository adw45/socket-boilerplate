var express = require('express');
var app = express();
var routes = require('./router.js');

app.use(express.static('./app'));
app.use('/_api', routes);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

module.exports = {
  server: app
};