const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose'); //requiring Mongoose 
const bodyParser = require('body-parser');
const  Profile = require('../models/profile'); // importing profile.js

// Express App
const app = express(); // invoking the express() to create an instance of an express app.
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Connnecting the database - MongoDB
const dbURL = 'mongodb+srv://sourish:test1234@nodeserver.azl3d.mongodb.net/NodeServer?retryWrites=true&w=majority';
// Mongoose will be used to connect and interact with the database.
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }) // {useNewUrlParser: true, useUnifiedTopology: true} --> This parameter will stop the  Deprecation Warning
    .then( (result) => {
        console.log('Connected to Database');
        // Listen for requests (We are listening to the request only if the database is connected)
        app.listen(3000); // we can store this in a constants if we want to reuse the server for web socket.
    })
    .catch( err => console.log('Error:', err));


// API for Storing data into the database
app.post('/add-profile-data', (req, res) => {

    console.log('Request: ',req.body);

    // creating new instance of the profile
    const profile = new Profile(req.body);

    profile.save()
        .then(result => {
            //res.send(result);
            res.status(200).json({
                "Message": "Insertion Successful to database",
                "Note": "Profile data inserted"
            }) 
        })
        .catch( err => console.log(err) );  
});
