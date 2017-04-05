'use strict';

exports.seed = (knex, Promise) => (
  // Deletes ALL existing entries
  knex('sizes').del()
    .then(() => (
      // Inserts seed entries
      knex('sizes').insert([
        {name: 'Small', inches: 8},
        {name: 'Medium', inches: 10},
        {name: 'Large', inches: 12}
      ])
    ))
);
