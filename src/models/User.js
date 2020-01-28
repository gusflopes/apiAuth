import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const { Schema } = mongoose;

// Create a schema
const userSchema = new Schema({
  email: { type: String, required: true, lowercase: true },
  password: { type: String, required: true },
});

userSchema.pre('save', async function(next) {
  // used function to have access to this
  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);
    // Generate a password hash
    const passwordHash = await bcrypt.hash(this.password, salt);
    // Re-assign hashed version over original, plain text password
    this.password = passwordHash;
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.isValidPassword = async function(newPassword) {
  try {
    return await bcrypt.compare(newPassword, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

// Create a Model
const User = mongoose.model('user', userSchema);

// Export the model
module.exports = User;
