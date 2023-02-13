const express = require('express');
const route = express.Router();
const run = require('../product').run;

route.get('/products', (req, res) => {
  run().then(result => {
    res.send(result);
  }).catch(err => {
    res.send(err);
  });
});

module.exports = route;