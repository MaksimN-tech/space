const {pluralize, Schema, model,} = require('mongoose');
const validator = require('validator');
pluralize(null);

const userSchema = Schema({
  name: {type: String,
     unique: true,
     required: true,
     trim: true,
     lowercase: true,
     validate(val) {
      if(!validator.isAlphanumeric(val)) {
        throw new Error('Not correct name');
      }
    }
    },
  email: {
    type: String,
     unique: true,
     required: true,
     lowercase: true,
     validate(val) {
       if(!validator.isEmail(val)) {
        throw new Error('Wrong email')
       }
     }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    min: 6
  },
  artile: {
    type: [String]
  }
})

const User = model('User', userSchema);
module.exports = User;
