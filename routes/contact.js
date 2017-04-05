'use strict';

const { Router } = require('express');
const router = Router();
const { get, addContact } = require('../controllers/contactCtrl.js');

router.get('/contact', get);
router.post('/contact', addContact);

module.exports = router;
