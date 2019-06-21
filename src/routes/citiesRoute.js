const express = require('express');
const citiesController = require('../controllers/citiesController');

const routes = express.Router();

routes
  .get('/', citiesController.list)
  .get('/:id', citiesController.show)
  .post('/', citiesController.create)
  .put('/:id', citiesController.edit)
  .delete('/delete/:id', citiesController.delete);
module.exports = routes;
