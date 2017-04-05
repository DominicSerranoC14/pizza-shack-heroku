'use strict';

const sizes = require('./sizes.json');

const sizePromises = (knex) =>
  sizes.map(({name, inches}) => knex('sizes').insert({ name, inches}));
  

// Deletes ALL existing entries and run the promise.all
exports.seed = (knex, Promise) =>
  knex('sizes').del().then(() => Promise.all(sizePromises(knex)));
