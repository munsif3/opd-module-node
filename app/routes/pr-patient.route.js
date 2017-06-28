'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.set('debug', false);

const patientModel = mongoose.model('patient');

const Router = express.Router();


//get all patients details
Router.get('/', (req, res) => {
    console.log("get received");
    patientModel.find().exec().then(patients => {
        res.json(patients);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});



//add new patient details
Router.post('/', function (req,res) {
    //console.log("post received!!",req.body);
    const register = new patientModel(req.body);
    if(register.nic == null || register.nic == " " ){
        res.json({success:false , message :'Ensure nic is provided' });
    }
    else {
        //validate the patient, uniqueness
        register.save(function (err) {
            if (err){
                console.log(err);
                //res.json({success:false , message :'Patient already exists' });
            }
            else{
                res.json({success:true , message :'patient created' });
            }
        });
    }
});



//get patient details by ID
Router.get('/:id', (req, res) => {
    patientModel.findById(req.params.id).exec().then(patient => {
        res.json(patient || {});
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});


//delete patient details by ID
Router.delete('/:id', (req, res) => {
    patientModel.findByIdAndRemove(req.params.id).then(patient => {
        console.log("deleted");
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

module.exports = Router;
