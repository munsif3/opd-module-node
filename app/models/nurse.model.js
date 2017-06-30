'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NurseSchema = new Schema({

    userId: {
        type: String,
        required: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    address: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    role:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
});

const Nurse = mongoose.model('Nurse', NurseSchema);

module.exports = Nurse;
