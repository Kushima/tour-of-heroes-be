var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var instantMongoCrud = require('express-mongo-crud');

var PORT = 3000;
mongoose.connect('localhost:27017/toh');

app.use(bodyParser.json());

var options = {
  host: 'localhost:3000'
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.use(instantMongoCrud(options));

router.get('/api', function(req, res) {
  res.send('funciona!');
});

app.use(router);

app.listen(PORT, ()=>{
  console.log('Iniciado na porta ' + PORT);
})
