'use strict';

const Contact = require('../models/contact.js');


const get = (req, res) => {
  res.render('contact');
};


const addContact = ({body}, res, err) => {
  Contact.forge(body).save().then(() => res.redirect('/'));
};


module.exports = { get, addContact };
