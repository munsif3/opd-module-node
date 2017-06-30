'use strict';

const mongoose = require('mongoose');
const express = require('express');

mongoose.set('debug', false);

const PvsDiagnoseRouter = mongoose.model('patientDiagnosis');

const Router = express.Router();

//get all patient diagnosis
Router.get('/', (req, res) => {
    PvsDiagnoseRouter.find().exec().then(patientDiagnosis => {
        res.json(patientDiagnosis);
    }).catch(err => {
        console.log(err);
        res.status(500);
    });

});

//get patient diagnosis by ID
Router.get('/:id', (req, res) => {
    PvsDiagnoseRouter.findById(req.params.id).exec().then(patientDiagnosis => {
        res.json(patientDiagnosis || {});
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

//post patient
Router.post('/', (req, res) => {
    const pvsDiagnose = new PvsDiagnoseRouter(req.body);
    pvsDiagnose.save().then(pvsDiagnose => {
        res.status(201).json(pvsDiagnose);
    }).catch(err => {
        console.log(err);
        res.status(500);
    });
});
module.exports = Router;

