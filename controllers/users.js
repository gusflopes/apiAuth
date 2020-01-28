module.exports = {
  signUp: async (req, res, next) => {
    try {
      // Email & Password
      console.log("contents of req.value.body", req.value.body);
      console.log("UsersController.signUp() called!");
    } catch (error) {
      next(error);
    }
  },

  signIn: async (req, res, next) => {
    try {
      // Generate token
      console.log("UsersController.signIn() called!");
    } catch (error) {
      next(error);
    }
  },

  secret: async (req, res, next) => {
    try {
      console.log("UsersController.secret() called!");
    } catch (error) {
      next(error);
    }
  }
};
