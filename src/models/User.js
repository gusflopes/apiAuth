import mongoose from 'mongoose';

const { Schema } = mongoose;

// Create a schema
const userSchema = new Schema({
  email: { type: String, required: true, lowercase: true },
  password: { type: String, required: true },
});

// Create a Model
const User = mongoose.model('user', userSchema);

// Export the model
module.exports = User;
