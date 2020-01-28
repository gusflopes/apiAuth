const User = require('../models/User');

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

      // Respond with token

      res.json({ user: 'created.' });
    } catch (error) {
      next(error);
    }
  },

  signIn: async (req, res, next) => {
    try {
      // Generate token
      console.log('UsersController.signIn() called!');
    } catch (error) {
      next(error);
    }
  },

  secret: async (req, res, next) => {
    try {
      console.log('UsersController.secret() called!');
    } catch (error) {
      next(error);
    }
  },
};
