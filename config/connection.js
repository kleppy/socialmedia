// thoughts and Reactions Db initialize 
const { connect, connection } = require('mongoose');
connect('mongodb://localhost/thoughtsAndReactions', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
// Export
module.exports = connection;
