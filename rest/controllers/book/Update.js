const BookModel = require('../../models/Book');
const mime = require('mime');
const randomName = require('../../helpers/randomNumber');

const PUBLIC_PATH = process.env.PUBLIC_PATH || '../../media';

module.exports = async (req, res) => {
    try 
    {
        let bookData = { 
            title: req.body.title, 
            author: req.body.author, 
            description: req.body.description, 
            price: req.body.price, 
            isbn: req.body.isbn
        }
        
        if(req.files)
        {
            var bookCover = req.files.image
            var bookCoverName = randomName()  + '.' + mime.getExtension(bookCover.mimetype);
            bookCover.mv(PUBLIC_PATH + bookCoverName);
            bookData.coverImage = bookCoverName;
        }

        let book = await BookModel.update( req.params.id, bookData);
        
        return res.status(201).json({
                success: true,
                status_code: 201,
                message: "The book has updated",
                book
            });
        
    } catch(error) {
        
        return res.status(500).json({
                success: false,
                status_code: 500,
                message: error.message
            })
    }
}