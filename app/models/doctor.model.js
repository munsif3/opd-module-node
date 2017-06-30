'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
    userId: {
        type:Schema.Types.ObjectId,
        ref:'User'
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
    }
});

const Doctor = mongoose.model('Doctor', DoctorSchema);

module.exports = Doctor;
