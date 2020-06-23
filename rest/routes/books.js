const express = require('express');
const Books = require('../controllers/BookController');
const Router = express.Router();

Router.get('/', Books.all);
Router.post('/create', Books.create);
Router.get('/:id', Books.single);
Router.delete('/:id', Books.destroy);
Router.put('/:id', Books.update);

module.exports = Router;