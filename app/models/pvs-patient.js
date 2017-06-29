'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var patientSchema = new Schema({
    name :
        {
            type:String,
            required:true
        },
    firstname :
        {
            type:String,
            required:false
        }
});

module.exports = mongoose.model('patientVi', patientSchema);
