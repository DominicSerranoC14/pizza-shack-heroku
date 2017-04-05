'use strict';

const sizes = require('./toppings.json');

const toppingPromises = (knex) =>
  sizes.map(({name}) => knex('toppings').insert({name}));


// Deletes ALL existing entries and run the promise.all
exports.seed = (knex, Promise) =>
  knex('toppings').del().then(() => Promise.all(toppingPromises(knex)));
