import express from 'express';
import passport from 'passport';
import passportConfig from '../config/passport';

const router = require('express-promise-router')();

const { validateBody, schemas } = require('../helpers/routeHelpers');
const UsersController = require('../controllers/users');

router
  .route('/signup')
  .post(validateBody(schemas.authSchema), UsersController.signUp);

router.route('/signin').post(UsersController.signIn);

router
  .route('/secret')
  .get(
    passport.authenticate('jwt', { session: false }),
    UsersController.secret
  );

module.exports = router;
