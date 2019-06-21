const express = require('express');
const statesController = require('../controllers/statesController');

const routes = express.Router();

routes
  .get('/', statesController.list)
  .get('/:id', statesController.show)
  .post('/', statesController.create)
  .put('/:id', statesController.edit)
  .delete('/delete/:id', statesController.delete);
module.exports = routes;
