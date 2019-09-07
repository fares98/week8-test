const express = require('express');

const error = require('./error');
const city = require('./city');
const signup = require('./signup');
const login = require('./login');
const { auth } = require('./auth')
const { logout } = require('./logout');
const router = express.Router();

router.get('/login', login.renderLogin);
router.post('/login', login.loginFunction);

router.get('/signup', signup.renderSignup);
router.post('/signup', signup.signupFunc);

router.use(auth);
router.get('/cities', city.renderCities);

router.get('/all-cities', city.getAllCities);

router.post('/add-city', city.add);
router.get('/logout', logout)

router.use(error.client);
router.use(error.server);

module.exports = router;
