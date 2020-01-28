import jwt from 'jsonwebtoken';

const User = require('../models/User');

const signToken = user => {
  const token = jwt.sign(
    {
      iss: 'Gusflopes', // issuer
      sub: user.id, // subject
      iat: new Date().getTime(), // issued_at
      exp: new Date().setDate(new Date().getDate() + 1), // expiration: current time + 1 day ahead
    },
    process.env.JWT_SECRET
  );
  return token;
};

module.exports = {
  signUp: async (req, res, next) => {
    try {
      const { email, password } = req.value.body;

      // check if there is a user with the same email
      const foundUser = await User.findOne({ email });

      if (foundUser) {
        return res.status(403).json({ error: 'Email is already in use.' });
      }

      // Create a new user
      const newUser = new User({
        email,
        password,
      });
      await newUser.save();

      // Sign token
      const token = signToken(newUser);

      res.status(201).json({ message: 'User created.', token });
    } catch (error) {
      next(error);
    }
  },

  signIn: async (req, res, next) => {
    try {
      // Generate token
      // const token = signToken();
      const token = signToken(req.user);
      res.status(200).json({ message: 'Successfully logged in.', token });
    } catch (error) {
      next(error);
    }
  },

  secret: async (req, res, next) => {
    try {
      console.log('I managed to get here!');
      res.json({ secret: 'resource' });
    } catch (error) {
      next(error);
    }
  },
};
