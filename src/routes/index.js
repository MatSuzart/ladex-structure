const express = require('express');
const route = express.Router();
const getProducts = require('../product').getProducts;

route.get('/products', (req, res) => {
  getProducts().then(result => {
    res.send(result);
  }).catch(err => {
    res.send(err);
  });
});

module.exports = route;