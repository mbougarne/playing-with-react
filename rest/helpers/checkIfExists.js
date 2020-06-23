const BookModel = require('../models/Book');

const checkIfExists = async filter => await BookModel.exists(filter);

module.exports = checkIfExists;