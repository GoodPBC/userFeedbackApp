//keys.js
//if we are in production...
if (process.env.NODE_ENV === 'production') {
  //return production keys
} else {
  //return the dev keys when on dev server
  module.exports = require('./dev');
}
