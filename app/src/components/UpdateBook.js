import React, {useState, useEffect} from 'react'

import { useParams, useHistory } from 'react-router-dom'

import '../css/update-book.css'

function UpdateBook()
{
    let history = useHistory()
    let initBook = {
        id: '',
        title: '',
        author: '',
        description: '',
        isbn: '',
        price: '',
        currentCover: '',
    }

    let {id} = useParams()
    let [book, setBook] = useState(initBook)
    let [cover, setCover] = useState()
    let [bookUasUpdated, setBookUpdated] = useState(false)
    
    useEffect( () => {

        (async () => {
            let response = await fetch('http://localhost:4000/books/' + id)
            let data = await response.json()
            let fetchedBook = {
                id: data.book._id,
                title: data.book.title,
                author: data.book.author,
                description: data.book.description,
                isbn: data.book.isbn,
                price: data.book.price,
                currentCover: data.book.coverImage,
            }
            setBook(fetchedBook)
        })()

    }, [id])

    // On input changes
    const onInputChanges = e => {
        let {name, value} = e.target
        setBook({...book, [name]: value})
    }
   
    // On submit form
    const onBookUpdated = e => {
        
        e.preventDefault()

        let formData = new FormData();

        formData.append('title', book.title)
        formData.append('author',  book.author)
        formData.append('description',  book.description)
        formData.append('isbn',  book.isbn)
        formData.append('price',  book.price)
        
        if(typeof cover !== 'undefined')
        {
            formData.append('image',  cover)
        }
        
        let url = 'http://localhost:4000/books/' + book.id
        let options = {
            method: 'PUT',
            body: formData
        }
        
        return (async () => {
            let response = await fetch(url, options)
            let data = await response.json()
            
            return (data.success) ? history.push('/books/' + book.id) : false
        })()
    }

    return (
        <React.Fragment>
            {/* Jumbotron */}
            <div className="row">
                <div className="col-12">
                    <h1>
                        Update {book.title}
                    </h1>
                </div>
            </div>
            {/* Add Book Form */}
            <div className="mt-5 mb-5"></div>
            {/* The Form */}
            <div className="row">

                {/* Current Cover */}
                <div className="col-md-5 d-md-block d-sm-none">
                   {
                       (book.currentCover.length !== 0)
                       ?
                        <img 
                            src={'http://localhost:4000/media/books/covers/' + book.currentCover} 
                            alt={book.title} 
                            className="card-img-top img-fluid"/>
                        :
                        <img 
                            src="../images/no-image.jpg"
                            alt={book.title} 
                            className="card-img-top img-fluid"/>
                   }
                </div>

                {/* The form Column */}
                <div className="col-md-7">
                    {/* The form */}
                    <form onSubmit={onBookUpdated}>
                        {/* The card */}
                        <div className="card border-0">
                            {/* Card Body */}
                            <div className="card-body">
                                {/* Title */}
                                <div className="form-group row">
                                    {/* Title Label */}
                                    <label 
                                        htmlFor="title" 
                                        className="custom-label">
                                        title
                                    </label>
                                    {/* Title Input */}
                                    <input 
                                        type="text"
                                        id="title"
                                        name="title"
                                        className="form-control shadow-sm"
                                        value={book.title}
                                        onChange={onInputChanges}/>
                                </div>
                                {/* Author */}
                                <div className="form-group row">
                                    {/* Author Label */}
                                    <label 
                                        htmlFor="author" 
                                        className="custom-label">
                                        Author
                                    </label>
                                    {/* Author Iput */}
                                    <input 
                                        type="text"
                                        id="author"
                                        name="author"
                                        className="form-control shadow-sm"
                                        value={book.author}
                                        onChange={onInputChanges}/>
                                </div>
                                {/* ISBN */}
                                <div className="form-group row">
                                    {/* ISBN Label */}
                                    <label 
                                        htmlFor="isbn" 
                                        className="custom-label">
                                        ISBN
                                    </label>
                                    {/* ISBN Input */}
                                    <input 
                                        type="text"
                                        id="isbn"
                                        name="isbn"
                                        className="form-control shadow-sm"
                                        value={book.isbn}
                                        onChange={onInputChanges}/>
                                </div>
                                {/* Description */}
                                <div className="form-group row">
                                    {/* Description Label */}
                                    <label 
                                        htmlFor="description" 
                                        className="custom-label">
                                        Description
                                    </label>
                                    {/* Description Textarea */}
                                    <textarea
                                        id="description"
                                        className="form-control shadow-sm"
                                        name="description"
                                        value={book.description}
                                        onChange={onInputChanges}/>
                                </div>
                                {/* Price */}
                                <div className="form-group row">
                                    {/* Price Label */}
                                    <label 
                                        htmlFor="price" 
                                        className="custom-label">
                                        price
                                    </label>
                                    {/* Price Input */}
                                    <input 
                                        type="text"
                                        id="price"
                                        name="price"
                                        className="form-control shadow-sm"
                                        value={book.price}
                                        onChange={onInputChanges}/>
                                </div>
                                {/* Book Cover */}
                                <div className="form-group row">
                                    {/* Input Group */}
                                    <div className="input-group mb-3 shadow-sm">
                                        {/* Custom File Container */}
                                        <div className="custom-file">
                                            {/* Custom Ffile */}
                                            <input
                                                type="file" 
                                                className="custom-file-input"
                                                id="imageFile"
                                                onChange={e => setCover(e.target.files[0])}
                                                aria-describedby="bookCoverImage"/>
                                            <label 
                                                className="custom-file-label" 
                                                htmlFor="imageFile">
                                                Select Cover Image
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {/* Update Buttom Container */}
                                <div className="form-group row">
                                    <div className="col-12">
                                        {/* Button */}
                                        <button 
                                            type="submit" 
                                            className="btn btn-lg btn-success">
                                            Update Book
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default UpdateBook