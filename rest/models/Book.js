const mongoose = require('mongoose')
const BookSchema = require('../schema/BookSchema')
const BookModel = mongoose.model('Books', BookSchema)

require('dotenv').config();

let DBHOST = process.env.DB_URL || 'mongodb://localhost:27017/'
let DBNAME = process.env.DB_NAME || 'bookyLists'

mongoose.connect(DBHOST + DBNAME, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const Book = {

    getAll: async () => {
        try {
            
            let books = await BookModel.find()
            return books

        } catch (error) {

            throw new Error(error.message)
        }
    },

    create: async book => {
        try {
            
            return await BookModel.create(book)

        } catch (error) {

            throw new Error(error.message)
        }
    },

    single: async id => {

        try
        {
            let book = await BookModel.findById(id)
            return book

        } catch (error) {

            throw new Error(error.message)

        }
    },

    delete: async id => {
        try
        {
            let book = await BookModel.findByIdAndDelete(id)

            if(book === null) throw new Error('There is no book with ID _' + id);

            return book

        } catch (error) {

            throw new Error(error.message)

        }
    },
    
    update: async (id, book) => {
        try
        {
            return await BookModel.findByIdAndUpdate(id, book)

        } catch (error) {

            throw new Error(error.message)

        }
    },

    exists: async filter => {
        try
        {
            let book = await BookModel.findOne(filter)
            return (book !== null) ? true : false;

        } catch (error) {

            throw new Error(error.message)

        }
    }

}

module.exports = Book;