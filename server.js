//import express
const express = require('express');
//require passportJS
require('./services/passport');

const authRoutes = require('./routes/auth');
//generate express app
const app = express();

authRoutes(app);


//In production run on env var port || or run on port 5000
const PORT = process.env.PORT || 5000;

//express tells node to listen on a Port
app.listen(PORT);
