const bcrypt = require('bcryptjs');

const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create a schema
const userSchema = new Schema({
  method: {
    type: String,
    enum: ['local', 'google', 'facebook'],
    required: true,
  },
  local: {
    email: { type: String, lowercase: true },
    password: { type: String },
  },
  google: {
    id: { type: String },
    email: { type: String, lowercase: true },
  },
  facebook: {
    id: { type: String },
    email: { type: String, lowercase: true },
  },
});

userSchema.pre('save', async function(next) {
  // used function to have access to this
  try {
    if (this.method !== 'local') {
      next();
    }

    // Generate a salt
    const salt = await bcrypt.genSalt(10);
    // Generate a password hash
    const passwordHash = await bcrypt.hash(this.local.password, salt);
    // Re-assign hashed version over original, plain text password
    this.local.password = passwordHash;
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.isValidPassword = async function(newPassword) {
  try {
    return await bcrypt.compare(newPassword, this.local.password);
  } catch (error) {
    throw new Error(error);
  }
};

// Create a Model
const User = mongoose.model('user', userSchema);

// Export the model
module.exports = User;
