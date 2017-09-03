//require mongoose
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  instagramId: String,
  displayName: String,
  name: {
    first: String,
    last: String
  },
  credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);
