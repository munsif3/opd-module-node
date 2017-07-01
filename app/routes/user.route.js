'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.set('debug', false);

const UserModel = mongoose.model('User');
// const DoctorModel = mongoose.model('Doctor');

const Router = express.Router();

Router.get('/', (req, res) => {
    UserModel.find().exec().then(users => {
        res.json(users);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get('/:id', (req, res) => {
    UserModel.findById(req.params.id).exec().then(user => {
        res.json(user || {})
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    })
});

Router.post('/', (req, res) => {
    const User = new UserModel(req.body);
    User.save().then(user => {
        res.json(user);
        res.sendStatus(201);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    })
});

UserModel.count({role: "Doctor"}).exec();
UserModel.count({role: "Nurse"}).exec();
UserModel.count({role: "Administrator"}).exec();

module.exports = Router;