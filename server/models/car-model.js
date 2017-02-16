/**
 * Created by rvadivel on 2/15/2017.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('Cars', {
    name :{
        type: String,
        required: true
    },
    models :{
        type: [],
        required: true
    }
});