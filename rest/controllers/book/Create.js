const BookModel = require('../../models/Book')
const mime = require('mime');

const randomName = require('../../helpers/randomNumber'); 
const {inputIsValid, formMessage} = require('../../helpers/formValidation'); 

const PUBLIC_PATH = process.env.PUBLIC_PATH || '../../media';

module.exports = async (req, res) => {
    try 
    {
        let {title, author, isbn, description, price} = req.body;

        // Check if the request has title
        if(!inputIsValid(req.body.title)) return formMessage(res, 'title');
        // Check if the request has author
        if(!inputIsValid(req.body.author)) return formMessage(res, 'author');
        // Check if the request has ISBN
        if(!inputIsValid(req.body.isbn)) return formMessage(res, 'ISBN');

        // If the incoming request has an image
        if(req.files)
        {
            var bookCover = req.files.image
            var bookCoverName = randomName()  + '.' + mime.getExtension(bookCover.mimetype);
            bookCover.mv(PUBLIC_PATH + bookCoverName);
        }

        let coverImage = (typeof bookCoverName != 'undefined') ? bookCoverName : '';
        let createdBook = await BookModel.create({ title, author, description, price, isbn, coverImage });

        return res.status(201).json({
            success: true,
            status_code: 201,
            message: "The book has created",
            book: createdBook,
            bookCoverDetails: (coverImage != '') ? {
                name: coverImage,
                mimetype: bookCover.mimetype,
                size: bookCover.size
            } : ''
        });
        
    } catch(error) {
        
        return res.status(500).json({
                success: false,
                status_code: 500,
                message: error.message
            })
    }
}