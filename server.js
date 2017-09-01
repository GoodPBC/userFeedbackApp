//import express
const express = require('express');
//require mongoose
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
//require config keys
const keys = require('./config/keys');

//require mongoose UserSchema
require('./models/User');
//require passportJS
require('./services/passport');

//mongo connection
mongoose.connect(keys.mongoURI);

//generate express app
const app = express();

//express middlewares
app.use(bodyParser.json());
app.use(
  cookieSession({
    //formula for days
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

//require auth routes as function and call function on (app)
require('./routes/auth')(app);
//require billing routes as function and call function on (app)
require('./routes/billing')(app);

//production routing logic
if (process.env.NODE_ENV === 'production') {
  //express serve production assets
  app.use(express.static('client/ build'));

  //express serve index.html for unknown routes
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//In production run on env var port || or run on port 5000
const PORT = process.env.PORT || 5000;
//express tells node to listen on a Port
app.listen(PORT);
