//passport auth
const passport = require('passport');
//Google Passport Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//google keys
const keys = require('../config/keys');

// Google Stategy
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID, // keys
      clientSecret: keys.googleClientSecret, //secret key
      callbackURL: '/auth/google/callback' //callback URL
    },
    //this gets executed after the callback. Save access token to DB, it is our key to each user.
    (accessToken, refreshToken, profile, done) => {
      console.log('access token', accessToken);
      console.log('refresh token', refreshToken);
      console.log('Display Name', profile.displayName);
    }
  )
);
