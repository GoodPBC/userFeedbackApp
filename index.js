//import dependencies
const express = require('express');
//passport auth
const passport = require('passport');
//Google Passport Strategy
const GoogleAuth = require('passport-google-oauth20').Strategy;

const keys = require('./config/keys');
//generate express app
const app = express();

//instance of passport google stategy
passport.use(
  new GoogleAuth(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    accessToken => {
      console.log(accessToken);
    }
  )
);

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

//In production run on env var port || or run on port 5000
const PORT = process.env.PORT || 5000;
//express tells node to listen on a Port
app.listen(PORT);

// GoogleAuth Client id:
//

// GoogleAuth secret id:
//
