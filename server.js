'use strict';

// Adding Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// Creating the Express Application
const app = express();

// Requiring Models
require('./app/models/user.model');
require('./app/models/pr-patient.model.js');
require('./app/models/doctor.model');
require('./app/models/nurse.model');

// Requiring Routers
const UserRouter = require('./app/routes/user.route');
const PatientRouter = require('./app/routes/pr-patient.route.js');
const DoctorRouter = require('./app/routes/doctor.route');
const NurseRouter = require('./app/routes/nurse.route');

// Enabling CORS Support
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Requiring the DB Configuration File
const db = require('./config/db');

// Setting the PORT
const port = process.env.PORT || 7070;

// Replacing Mongoose Promise
mongoose.Promise = global.Promise;

// Connecting to DB
mongoose.connect(db.url, err => {
    if (err) {
        console.log('Unable to connect to MongoDB');
        console.log(err);
    }
    console.log('Successfully connected to MongoDB');
});

// Using dependent functions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('X-HTTP-Method-Override'));

// Returning for Root Request
app.get('/', (req, res) => {
    res.send('<h1>OPD Module Service<br>♥ S L I I T</h1>');
});

// Returning other Requests
app.use('/api/users', UserRouter);
app.use('/api/patients', PatientRouter);
app.use('/api/doctors', DoctorRouter);
app.use('/api/nurses', NurseRouter);

// Create Server and Listen for Requests
app.listen(port, err => {
    if (err) {
        console.log('Error listening on port ' + port);
        return;
    }
    console.log('Accepting Requests on ' + port);
});
