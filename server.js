/**
 * Created by rvadivel on 2/14/2017.
 */
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    methodOverride = require('method-override'),
    _ = require('lodash'),
    //nodeRestful = require('node-restful'),
    carControllerServer = require('./server/controllers/cars-controller-server');

mongoose.connect('mongodb://localhost:27017/meanAppDb');
mongoose.connection.once('open', function(){
    app.listen(3000, function(){
        console.log("Listening to port 3000....");
    });
});

app.models = require('./server/models/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('X-HTTP-Method-Override'));

/*CORS*/
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/', function(req, res){
    res.sendFile('C:/cisco/mean-demo/client/index.html');
});

app.use('/javascripts', express.static(__dirname  + '/client/javascripts'));
app.use('/app.js', express.static(__dirname  + '/client/app.js'));

//app.post('/api/cars', carControllerServer.addCars);
app.get('/api/cars', carControllerServer.getCars);

