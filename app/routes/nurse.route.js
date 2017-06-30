'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.set('debug', false);

const NurseModel = mongoose.model('Nurse');

const Router = express.Router();

Router.get('/', (req, res) => {
    NurseModel.find().exec().then(nurses => {
        res.json(nurses);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get('/:id', (req, res) => {
    NurseModel.findById(req.params.id).exec().then(nurse => {
        res.json(nurse || {})
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    })
});

Router.post('/', (req, res) => {
    const User = new NurseModel(req.body);
    User.save().then(nurse => {
        res.json(nurse);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    })
});

module.exports = Router;