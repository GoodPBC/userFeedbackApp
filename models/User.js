//require mongoose
const mongoose = require('mongoose');
//import the schema property from the mongoose object
const Schema  = mongoose.Schema;

//create new user schema
const userSchema = new Schema ({
  googleId: String,
  instagramId: String
});

mongoose.model('User', userSchema);
