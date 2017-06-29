var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var prescriptionSchema = new Schema({
    patientId : {type:String, required:true},
    patientName : {type:String, required:true},
    prescribedPhysician : {type:String, required:true},
    nameOfMedicine : {type:String, required: true},
    strength : {type:String, required: true},
    frequency : {type : String},
    duration : {type : String}
});

module.exports = mongoose.model('patientPrescription', prescriptionSchema);