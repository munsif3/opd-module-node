'use strict';

const mongoose = require('mongoose');
const express = require('express');

mongoose.set('debug',false);

const PatientRouter = mongoose.model('patientVi');
const Router = express.Router();

Router.get('/',(req, res)=>{
    PatientRouter.find().exec().then(patientVi=>{
        res.json(patientVi);
    }).catch(err =>{
        console.log(err);
        res.status(500);
    });

});

Router.post('/',(req, res)=>{
    const pvspat = new PatientRouter(req.body);
    pvspat.save().then(pvspat=>{
        res.status(201).json(pvspat);
    }).catch(err=>{
        console.log(err);
        res.status(500);
    });
});

module.exports = Router;

