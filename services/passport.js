//passport auth
const passport = require('passport');
//Google Passport Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//Instagram Passport Strategy
const InstagramStrategy = require('passport-instagram');
//require mongoose
const mongoose = require('mongoose')
//google keys
const keys = require('../config/keys');

//require our mongoose userSchema
const User = mongoose.model('User')

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
      console.log('Display Name', profile);
    }
  )
);

//Instagram Passport Strategy
passport.use(
  new InstagramStrategy(
    {
      clientID: keys.INSTAGRAM_CLIENT_ID,
      clientSecret: keys.INSTAGRAM_CLIENT_SECRET,
      callbackURL: 'http://localhost:5000/auth/instagram/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('access token', accessToken);
      console.log('refresh token', refreshToken);
      console.log('Display Name', profile);
      // User.findOrCreate({ instagramId: profile.id }, function(err, user) {
      //   return done(err, user);
      // });
    }
  )
);
