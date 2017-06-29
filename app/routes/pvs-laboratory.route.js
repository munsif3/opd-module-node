'use strict';

const mongoose = require('mongoose');
const express = require('express');

mongoose.set('debug',false);

const PvsLaboratoryRouter = mongoose.model('patientLaboratory');

const Router = express.Router();

Router.get('/',(req, res)=>{
    PvsLaboratoryRouter.find().exec().then(patientLaboratory=>{
        res.json(patientLaboratory);
    }).catch(err =>{
        console.log(err);
        res.status(500);
    });

});

Router.post('/',(req, res)=>{
    const pvsLaboratory = new PvsLaboratoryRouter(req.body);
    pvsLaboratory.save().then(pvsLaboratory=>{
        res.status(201).json(pvsLaboratory);
    }).catch(err=>{
        console.log(err);
        res.status(500);
    });
});
module.exports = Router;

