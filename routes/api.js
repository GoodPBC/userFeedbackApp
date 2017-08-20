//import express
const express = require('express');

// API ROUTES
module.exports = app => {
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
