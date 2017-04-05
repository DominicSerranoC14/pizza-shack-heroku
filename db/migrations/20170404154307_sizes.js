'use strict';

exports.up = (knex, Promise) => (
  knex.schema.createTable('sizes', table => {
    table.increments();
    table.string('name').notNullable().unique();
    table.string('inches').notNullable();
  })
);

exports.down = (knex, Promise) => knex.schema.dropTable('sizes');
