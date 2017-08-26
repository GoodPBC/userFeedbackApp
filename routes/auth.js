//import express
const express = require('express');
//imoport passportJS npm module
const passport = require('passport');
/* AUTHENTICATION ROUTES*/

//export google auth routes to
module.exports = app => {
  // app.get('/dashboard', (req, res) => {
  //   res.send('This is is the dashboard');
  // });

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
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/dashboard');
    }
  );

  //IG
  //ig auth route
  app.get('/auth/instagram', passport.authenticate('instagram'));

  app.get(
    '/auth/instagram/callback',
    passport.authenticate('instagram'),
    (req, res) => {
      // Successful authentication, redirect home.
      res.redirect('/dashboard');
    }
  );

  //log out
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  //API Route to return user object for logged in user
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
