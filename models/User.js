//require mongoose
const mongoose = require('mongoose');
//import the schema property from the mongoose object
const Schema = mongoose.Schema;

//create new user schema
const userSchema = new Schema({
  googleId: String,
  instagramId: String,
  displayName: String,
  name: {
    first: String,
    last: String
  },
  credits: { type: Number, default: 0 },
  instaToken: String
});

mongoose.model('User', userSchema);
