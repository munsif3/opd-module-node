'use strict';

const mongoose = require('mongoose');
const express = require('express');

mongoose.set('debug',false);

const PvsDiagnoseRouter = mongoose.model('patientDiagnosis');

const Router = express.Router();

Router.get('/',(req, res)=>{
    PvsDiagnoseRouter.find().exec().then(patientDiagnosis=>{
        res.json(patientDiagnosis);
    }).catch(err =>{
        console.log(err);
        res.status(500);
    });

});

Router.post('/',(req, res)=>{
    const pvsDiagnose = new PvsDiagnoseRouter(req.body);
    pvsDiagnose.save().then(pvsDiagnose=>{
        res.status(201).json(pvsDiagnose);
    }).catch(err=>{
        console.log(err);
        res.status(500);
    });
});
module.exports = Router;

