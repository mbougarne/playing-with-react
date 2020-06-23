const BookModel = require('../../models/Book')

module.exports = async (req, res) => {
    try
    {
        let book = await BookModel.single(req.params.id)
        return res.status(200).json({
            success: true,
            book
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            status_code: 500,
            message: error.message
        });
    }
}