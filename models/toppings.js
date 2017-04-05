'use strict';

const { bookshelf } = require('../db/db.js');

const Toppings = bookshelf.Model.extend({
  tableName: 'toppings'
});

module.exports = Toppings;
