'use strict';

exports.seed = (knex, Promise) => (
  // Deletes ALL existing entries
  knex('toppings').del()
    .then(() => (
      // Inserts seed entries
      knex('toppings').insert([
        {name: 'Pepperoni'},
        {name: 'Bell Pepper'},
        {name: 'Onion'},
        {name: 'Cheese'},
        {name: 'Sausage'}
      ])
    ))
);
