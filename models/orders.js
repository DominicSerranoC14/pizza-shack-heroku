'use strict';

const { knex, bookshelf } = require('../db/db.js');


const Order = bookshelf.Model.extend(
  {
  tableName: 'orders'
  },
  {
    getSizes: () => knex('sizes'),
    getToppings: () => knex('toppings')
  }
);

module.exports = Order;
