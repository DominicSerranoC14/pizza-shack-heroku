'use strict';

const Order = require('../models/orders.js');

const get = ({body}, res) => {
  Promise.all([
    Order.getToppings(), Order.getSizes()
  ])
  .then(([toppings, sizes]) => {
    res.render('order', {body, toppings, sizes});
  })
  .catch(console.log);
};


const addOrder = ({body}, res, err) => {
  Order.forge(body)
  .save()
  .then(orderObj => {
    res.render('index', {orderMsg: 'Thanks for your order!'});
  })
  .catch((error) => {
    let { detail } = error;
    return Promise.all([
      detail, Order.getSizes(), Order.getToppings()
    ])
  })
  .then(([detail, toppings, sizes]) => {
    res.render('order', {detail, toppings, sizes});
  })
  .catch((err) => console.log(err));
};


module.exports = { get, addOrder };
