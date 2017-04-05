'use strict';

const { bookshelf } = require('../db/db.js');

const Contact = bookshelf.Model.extend({
  tableName: 'contacts'
});


module.exports = Contact;
