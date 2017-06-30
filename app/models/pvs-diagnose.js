'use strict';

const mongoose = require('mongoose');
const sequenceGenerator = require('mongoose-sequence-plugin');

const Schema = mongoose.Schema;

const diagnoseSchema = new Schema({

    diagnoseId: {
        type: String
    },
    name: {
        type: String
    },
    complaint: {
        type: String
    },
    visitType: {
        type: String
    },
    remarks: {
        type: String
    },
    visitDate: {
        type: Date
    },
    doctor: {
        type: String,
    },
    weight: {
        type: Number
    },
    height: {
        type: Number
    },
    sysbp: {
        type: Number
    },
    diastbp: {
        type: Number
    },
    temperature: {
        type: Number
    }
});

diagnoseSchema.plugin(sequenceGenerator,{
    field:'diagnoseId',
    startAt:'001',
    prefix: 'PAT-'
});

module.exports = mongoose.model('patientDiagnosis', diagnoseSchema);
