//import express
const express = require('express');
//generate express app
const app = express();

//route handler
app.get('/', (req, res) => {
  res.send({ hi: 'there' });

  console.log('=======================================');
  console.log('=======================================');
  console.log('=======================================');
});

//In production run on env var port || or run on port 5000
const PORT = process.env.PORT || 5000;
//express tells node to listen on a Port
app.listen(PORT);
