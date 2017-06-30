'use strict';

const mongoose = require('mongoose');
const SequenceGenerator = require('mongoose-sequence-plugin');

const Schema = mongoose.Schema;

const UserSchema = new Schema({

    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    userId: {
        type: String
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

UserSchema.plugin(SequenceGenerator, {
    field: 'userId',
    startAt: '001',
    prefix: 'US-'
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
