const express = require('express');
const routes = express.Router();
const itemController = require('../controllers/item.controller');

routes.post('/item', itemController.createItem);
routes.get('/item', itemController.getItem);
routes.delete('/item', itemController.deleteItem);
routes.put('/item', itemController.updateItem);

module.exports = routes;