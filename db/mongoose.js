const {connect, connection} = require('mongoose');
const dotenv = require('dotenv').config();

connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = connection;
