const BookModle = require('../../models/Book')

module.exports = async (req, res) => {

    try {

        let books = await BookModle.getAll();
        return res.status(200).json({
            success: true,
            message: 'We succssfully get the books',
            books
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            status_code: 500,
            message: error.message
        });

    }
    
}