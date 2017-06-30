var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var prescriptionSchema = new Schema({
    patientId :
        {
            type:String,
            required:true
        },
    patientName :
        {
            type:String,
            required:true
        },
    prescribedPhysician :
        {
            type:String,
            required:true
        },
    date:
        {
            type:Date
        },
    nameOfMedicine :
        {
            type:String,
            required: true
        },
    strength :
        {
            type:String,
            required: true
        },
    frequency :
        {
            type : String
        },
    duration :
        {
            type : Number
        }
});

module.exports = mongoose.model('patientPrescription', prescriptionSchema);