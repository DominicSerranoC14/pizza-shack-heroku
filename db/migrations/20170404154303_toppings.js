'use strict';

exports.up = (knex, Promise) => (
  knex.schema.createTable('toppings', table => {
    table.increments();
    table.string('name').notNullable().unique();
  })
);

exports.down = (knex, Promise) => knex.schema.dropTable('toppings');
