//import express
const express = require('express');
//imoport passportJS npm module
const passport = require('passport');
/* AUTHENTICATION ROUTES*/

//export google auth routes to
module.exports = (app) => {
  //google auth route
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  //google auth callback route
  app.get('/auth/google/callback',
    passport.authenticate('google', {})
  );
};
