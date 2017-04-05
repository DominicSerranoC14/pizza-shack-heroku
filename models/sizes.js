'use strict';

const { bookshelf } = require('../db/db.js');

const Size = bookshelf.Model.extend({
  tableName: 'sizes'
});

module.exports = Size;
