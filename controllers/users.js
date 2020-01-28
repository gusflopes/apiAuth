module.exports = {
  signUp: async (req, res, next) => {
    try {
      console.log("UsersController.signUp() called!");
    } catch (error) {
      next(error);
    }
  },

  signIn: async (req, res, next) => {
    try {
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
