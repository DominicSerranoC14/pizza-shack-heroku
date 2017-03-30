'use strict';

const { Router } = require('express');
const router = Router();


// Public routes
router.use(require('./root.js'));
router.use(require('./login.js'));
router.use(require('./register.js'));
router.use(require('./contact'));


// Authorization middleware
router.use((req, res, next) => {
  // if (req.isAuthenticated()) {
  //   next();
  // } else {
  //   res.redirect('/login');
  // }
});


// Private routes


module.exports = router;
