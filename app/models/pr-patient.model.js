var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var patientSchema = new Schema({
	title:{type:String, required: true},
    firstName: { type:String, required: true},
    lastName: { type:String, required: true},
    nic:{type:String,required: true, unique: true},
    address:{type:String,required:true},
    telephoneNo:{type:String,required:true},
    dateOfBirth : {type:Date},
    gender:{type:String},
    disease : {type:String}
});

module.exports = mongoose.model('patient',patientSchema);
