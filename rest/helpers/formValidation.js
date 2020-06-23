module.exports = {
    inputIsValid: input => (typeof input != 'undefined' && input.length !== 0) ? true : false,
    formMessage: (res, field) => {
            return res.status(422).json({ 
            status: false, 
            message: field + ' is required'
        });
    }
}