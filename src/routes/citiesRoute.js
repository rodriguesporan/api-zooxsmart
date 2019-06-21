const express = require('express');
const routes = express.Router();

routes
  .get('/', (req, res) => {
    res.send('List');
  })
  .get('/:id', (req, res) => {
    res.send(`Show ${req.params.id}`);
  })
  .post('/', (req, res) => {
    res.send('Create');
  })
  .post('/:id', (req, res) => {
    res.send(`Edit ${req.params.id}`);
  })
  .post('/:id', (req, res) => {
    res.send(`Delete ${req.params.id}`);
  });
module.exports = routes;
