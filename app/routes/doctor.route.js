'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.set('debug', false);

const DoctorModel = mongoose.model('Doctor');

const Router = express.Router();

Router.get('/', (req, res) => {
    DoctorModel.find().exec().then(doctors => {
        res.json(doctors);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get('/:id', (req, res) => {
    DoctorModel.findById(req.params.id).exec().then(doctor => {
        res.json(doctor || {})
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    })
});

Router.post('/', (req, res) => {
    const User = new DoctorModel(req.body);
    User.save().then(doctor => {
        res.json(doctor);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    })
});



module.exports = Router;