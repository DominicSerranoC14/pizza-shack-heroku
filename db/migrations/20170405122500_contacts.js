'use strict';

exports.up = (knex, Promise) => (
  knex.schema.table('contacts', table => {
    table.dropColumns(['phone', 'message']);
    table.string('comment').notNullable();
  })
);

exports.down = (knex, Promise) => knex.schema.dropTable('contacts');
