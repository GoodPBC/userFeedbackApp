//import dependencies
const express = require('express');
//passport auth
const passport = require('passport');
//Google Passport Strategy
const GoogleAuth = require('passport-google-oauth20').Strategy;
//generate express app
const app = express();

//instance of passport google stategy
passport.use(new GoogleAuth());

//In production run on env var port || or run on port 5000
const PORT = process.env.PORT || 5000;
//express tells node to listen on a Port
app.listen(PORT);

// GoogleAuth Client id:
//

// GoogleAuth secret id:
//
