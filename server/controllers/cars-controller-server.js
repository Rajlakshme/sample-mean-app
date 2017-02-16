/**
 * Created by rvadivel on 2/15/2017.
 */
var car = require('../models/car-model');
var mongoose = require('mongoose'),
    carsData = mongoose.model('Cars');
module.exports = {
    'getCars': function (req, res, next) {
        console.log('inside server ctrl !!!!!!!!');
        return carsData.find();
    }

};

