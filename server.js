//import express
const express = require('express');
//require mongoose
const mongoose = require('mongoose');
//require config file
const keys = require('./config/keys');
//require passportJS
require('./services/passport');
//require mongoose UserSchema
require('./models/User');

//mongo connection
mongoose.connect(keys.mongoURI);

//generate express app
const app = express();

//require auth routes as function and call function on (app)
require('./routes/auth')(app);

//In production run on env var port || or run on port 5000
const PORT = process.env.PORT || 5000;
//express tells node to listen on a Port
app.listen(PORT);
