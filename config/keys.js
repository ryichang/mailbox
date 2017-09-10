// keys.js - figure out what seet of credentials to return
if (process.env.NODE_ENV === 'production') {
  // we are in production - return the prod set of keys
  module.exports = require('./prod');
} else {
  // we are in development - return dev keys
  module.exports = require('./dev');
}
