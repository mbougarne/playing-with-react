const express = require('express');
const path = require('path');
const cors = require('cors');
const fileUpload = require('express-fileupload');

// .env
require('dotenv').config();

let app = express();
let BookRoutes = require('./routes/books');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(fileUpload({createParentPath: true}));
app.use('/media/books/covers', express.static(path.join(__dirname, 'uploads')))


let host = process.env.HOST || 'localhost';
let port = process.env.PORT || 5000;

app.use('/books', BookRoutes);

app.listen(port, host, () => console.log(`Server running on ${host}:${port}`));
