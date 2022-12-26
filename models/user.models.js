// This file defines a Mongoose schema for a user, and creates a Mongoose model for interacting with the 'users' collection in a MongoDB database.
const { default: mongoose} = require("mongoose");

const userSchma = new mongoose.Schema({
    id: {
      type: String,
      require: true
    },
    name: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    phone: {
      type: Number,
      require: true
    },
    work: {
      type: String,
      require: true
    },
    password: {
      type: String,
      require: true
    },
    cPassword: {
      type: String,
      require: true
    },
    createdOn: {
      type: Date,
      default: Date.now
    },
})

module.exports = mongoose.model("User",userSchma)