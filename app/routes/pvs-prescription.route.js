'use strict';

const mongoose = require('mongoose');
const express = require('express');

mongoose.set('debug',false);

const PvsPrescriptionRouter = mongoose.model('patientPrescription');

const Router = express.Router();

//get all patient diagnosis
Router.get('/',(req, res)=>{
    PvsPrescriptionRouter.find().exec().then(patientPrescription=>{
        res.json(patientPrescription);
    }).catch(err =>{
        console.log(err);
        res.status(500);
    });

});

//get patient diagnosis by ID
Router.get('/:id', (req, res) => {
    PvsPrescriptionRouter.findById(req.params.id).exec().then(patientPrescription => {
        res.json(patientPrescription || {});
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

//post patient
Router.post('/',(req, res)=>{
    const pvsPrescription = new PvsPrescriptionRouter(req.body);
    pvsPrescription.save().then(pvsPrescription=>{
        res.status(201).json(pvsPrescription);
    }).catch(err=>{
        console.log(err);
        res.status(500);
    });
});
module.exports = Router;

