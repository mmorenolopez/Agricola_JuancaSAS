const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  // _id: {
  //   type: ObjectId,
  //   require: false,
  // },
  nombre: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    index: true,
  },
});

module.exports = mongoose.model('User', userSchema);
