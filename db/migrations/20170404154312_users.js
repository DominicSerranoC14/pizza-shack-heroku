'use strict';

exports.up = (knex, Promise) => (
  knex.schema.createTable('users', table => {
    table.increments();
    table.string('username').notNullable().unique();
    table.string('password').notNullable();
  })
);

exports.down = (knex, Promise) => knex.schema.dropTable('users');
