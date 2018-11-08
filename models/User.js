import mongoose from "mongoose";
const autoIncrement = require('mongoose-auto-increment');

const Schema = mongoose.Schema;

// Create the User Schema.
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

autoIncrement.initialize(mongoose.connection);
UserSchema.plugin(autoIncrement.plugin, 'User');
const User = mongoose.model("User", UserSchema);

export default User;