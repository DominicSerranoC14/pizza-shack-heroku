'use strict';

const { Router } = require('express');
const router = Router();
const root = require('./root.js');

// Public routes
router.use(root);

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
