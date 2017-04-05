'use strict';

exports.up = (knex, Promise) => (
  knex.schema.createTable('orders', table => {
    table.increments();
    table.string('name').notNullable().unique();
    table.string('email').notNullable();
    table.string('size').notNullable();
    table.specificType('toppings', knex.raw('text[]')).notNullable().defaultTo('{"cheese"}');
  })
);

exports.down = (knex, Promise) => knex.schema.dropTable('orders');
