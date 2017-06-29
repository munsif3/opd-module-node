'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var diagnoseSchema = new Schema({
    complaint :
        {
            type:String,
            required:true
        },
    visitType :
        {
            type:String,
            required:false
        },
    remarks :
        {
            type:String
        },
    visitDate :
        {
            type:Date
        },
    doctor :
        {
            type : String,
            required:true
        },
    weight :
        {
            type:Number
        },
    height :
        {
            type:Number
        },
    sysbp :
        {
            type:Number
        },
    diastbp :
        {
            type:Number
        },
    temperature :
        {
            type:Number
        }
});

module.exports = mongoose.model('patientDiagnosis', diagnoseSchema);
