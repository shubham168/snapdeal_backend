const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
  },
  facebookId: {
    type: String,
  },
  email: {
    type: String,
    
  },
  mobile: {
    type: String,
  },
  displayName: {
    type: String,
   
  },
  address: {
    type: Object,
  },
  password: {
    type: String,
  },
});

const userModel = mongoose.model("user", userSchema, "user");

module.exports = { userModel };
