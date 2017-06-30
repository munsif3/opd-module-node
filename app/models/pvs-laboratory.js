var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var laboratorySchema = new Schema({
    patientId :
        {
            type:String,
            required:true
        },
    requestedPhysician :
        {
            type:String,
            required:true
        },
    testName :
        {
            type:String,
            required:true
        },
    priority :
        {
            type:String,
            required:true
        },
    requestedDate :
        {
            type:Date
        },
    dueDate :
        {
            type:Date
        },
    comment :
        {
        type : String
        }
});

module.exports = mongoose.model('patientLaboratory', laboratorySchema);

