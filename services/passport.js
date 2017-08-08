//passport auth
const passport = require('passport');
//Google Passport Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//Instagram Passport Strategy
const InstagramStrategy = require('passport-instagram');
//require mongoose
const mongoose = require('mongoose');
//require our mongoose userSchema
const User = mongoose.model('User');

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
      //we search for a user with a googleId that is equal to profile.id
      User.findOne({ googleId: profile.id })
        //then look for existingUser
        .then(existingUser => {
          //if a record exists do nothing
          if (existingUser) {
            //
          } else {
            //if a record doesnt exist, create one
            new User({ googleId: profile.id })
              //save it
              .save()
              //run the done CB function
              .then(user => done(null, user));
          }
        });

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
