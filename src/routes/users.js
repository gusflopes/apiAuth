import express from 'express';
import passport from 'passport';
import passportConfig from '../config/passport';

const router = require('express-promise-router')();

const { validateBody, schemas } = require('../helpers/routeHelpers');
const UsersController = require('../controllers/users');

const passportSignIn = passport.authenticate('local', { session: false });
const passportJWT = passport.authenticate('jwt', { session: false });
const passportGoogle = passport.authenticate('googleToken', { session: false });
router
  .route('/signup')
  .post(validateBody(schemas.authSchema), UsersController.signUp);

router
  .route('/signin')
  .post(
    validateBody(schemas.authSchema),
    passportSignIn,
    UsersController.signIn
  );

router.route('/oauth/google').post(passportGoogle, UsersController.googleOauth);

router.route('/secret').get(passportJWT, UsersController.secret);

module.exports = router;
