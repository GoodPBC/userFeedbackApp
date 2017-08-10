//passport auth
const passport = require('passport');
//Google Passport Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//Instagram Passport Strategy
const InstagramStrategy = require('passport-instagram');
//require mongoose
const mongoose = require('mongoose');
//google keys
const keys = require('../config/keys');

//require our mongoose userSchema
const User = mongoose.model('User');

//put an identifier in our cookie
passport.serializeUser((user, done) => {
  done(null, user.id); //this is our db user id (_id) from mongo
});

//turn the identifier into a user model
passport.deserializeUser((id, done) => {
  //find user by mongo id
  User.findById(id)
    //turn into a user
    .then(user => {
      done(null, user);
    });
});

// Google Stategy
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID, // keys
      clientSecret: keys.googleClientSecret, //secret key
      callbackURL: 'http://localhost:5000/auth/google/callback' //callback URL
    },
    //this gets executed after the callback. Save access token to DB, it is our key to each user.
    async (accessToken, refreshToken, profile, done) => {
      //we search for a user with a googleId that is equal to profile.id
      const existingUser = await User.findOne({ googleId: profile.id });

      //if a record exists do nothing
      if (existingUser) {
        return done(null, existingUser);
      }
      //if a record doesnt exist, create one
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
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
