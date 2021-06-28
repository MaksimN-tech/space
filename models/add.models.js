const {pluralize, Schema, model,} = require('mongoose');
pluralize(null);

const addSchema = Schema({
  title: {
    type: String
    },
  date: {
    type: String
  },
  description: {
    type: String
  },
  img: {
    type: String
  },
  url: {
    type: String
  }
})

const Add = model('articles', addSchema);
module.exports = Add;
