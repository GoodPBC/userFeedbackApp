//keys.js
//if we are in production...
if (process.env.NODE_ENV === 'production') {
  //return production keys
} else {
  //return the dev keys
  module.exports = require('./dev');
}
