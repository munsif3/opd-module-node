'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.set('debug', false);

const UserModel = mongoose.model('User');

const Router = express.Router();

Router.get('/', (req, res) => {
    UserModel.find().exec().then(users => {
        res.json(users);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

module.exports = Router;