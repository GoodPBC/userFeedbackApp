//import express
const express = require('express');
//imoport passportJS npm module
const passport = require('passport');
/* AUTHENTICATION ROUTES*/

//export google auth routes to
module.exports = app => {
  app.get('/dashboard', (req, res) => {
    res.send('This is is the dashboard');
  });

  //google auth route
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  //google auth callback route
  app.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
      res.redirect('/');
    }
  );

  //IG
  //ig auth route
  app.get('/auth/instagram', passport.authenticate('instagram'));

  app.get(
    '/auth/instagram/callback',
    passport.authenticate('instagram', { failureRedirect: '/login' }),
    (req, res) => {
      // Successful authentication, redirect home.
      res.redirect('/');
    }
  );
};
