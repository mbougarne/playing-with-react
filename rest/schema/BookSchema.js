const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        required: [true, "The title is required"],
        unique: true,
        index: true,
        type: String
    },
    author: {
        required: [true, "The author is required"],
        type: String
    },
    isbn: {
        required: [true, "The ISBN is required"],
        unique: true,
        index: true,
        type: String
    },
    price: {
        required: [true, "The price is required"],
        type: String
    },
    coverImage: String,
    description: String,
}, {
    timestamps: true,
});

module.exports = BookSchema;