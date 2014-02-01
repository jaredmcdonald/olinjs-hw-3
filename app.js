
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var models = require('./models');
var ingredient = require('./routes/ingredient')(models);
var order = require('./routes/order')(models);
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/ingredient/new', ingredient.new);
app.post('/ingredient/create', ingredient.create);

app.get('/order/new', order.new);
app.post('/order/create', order.create);
app.get('/orders', order.showOrders);
app.post('/order/remove', order.remove);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
