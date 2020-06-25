import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import NotificationContext from '../context/NotificationContenxt'

import '../css/AddBook.css'

function AddBook()
{
    let history = useHistory()
    let initBook = {
        title: '',
        author: '',
        isbn: '',
        description: '',
        price: ''
    }

    let [book, setBook] = useState(initBook)
    let [cover, setCover] = useState()
    let [tempCover, setTempCover] = useState('')

    let { setNotify } = useContext(NotificationContext)

    // Add Book
    const onAddBook = (e) => {
        
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
        
        let url = 'http://localhost:4000/books/create'
        let options = {
            method: 'POST',
            body: formData
        }
        
        return (async () => {
            let response = await fetch(url, options)
            let data = await response.json()
            
            if(data.success)
            {
                setNotify({
                    show: true,
                    success: true,
                    message: 'The book has created succeffully'
                })
                history.push('/books/' + data.book._id)
            } else{
                setNotify({
                    show: true,
                    success: false,
                    message: data.message
                })
            }
        })()        
    }

    const onInputChange = e => setBook({...book, [e.target.name]: e.target.value})

    // On cover image selected
    const onCoverSelected = e => {
        setCover(e.target.files[0])
        setTempCover(URL.createObjectURL(e.target.files[0]))
        
    }

    return (
        <div className="row">
            {/* Selected Cover Image */}
            <div className="col-md-5">
                {
                    (tempCover.length !== 0)
                    ?
                    <img 
                        src={tempCover}
                        alt={book.title} 
                        className="card-img-top img-fluid"/>
                    :
                    <h5 className="diplsay-1">
                        NO COVER IMAGE SELECTED
                    </h5>
                }
            </div>
            <div className="col-md-7">
                <form onSubmit={onAddBook}>
                    <div className="card border-0">
                        {/* Card Body */}
                        <div className="card-body">
                            {/* Title */}
                            <div className="form-group row">
                                <label htmlFor="title">
                                    <b>Title</b>
                                </label>
                                <input 
                                    type="text"
                                    id="title"
                                    className="form-control shadow-sm"
                                    name="title"
                                    value={book.title}
                                    onChange={onInputChange}/>
                            </div>
                            {/* Author */}
                            <div className="form-group row">
                                <label htmlFor="author"><b>Author</b></label>
                                <input 
                                    type="text"
                                    id="author"
                                    className="form-control"
                                    name="author"
                                    value={book.author}
                                    onChange={onInputChange}/>
                            </div>
                            {/* ISBN */}
                            <div className="form-group row">
                                <label htmlFor="isbn"><b>ISBN</b></label>
                                <input 
                                    type="text"
                                    id="isbn"
                                    className="form-control"
                                    name="isbn"
                                    value={book.isbn}
                                    onChange={onInputChange}/>
                            </div>
                            {/* Description */}
                            <div className="form-group row">
                                <label htmlFor="description"><b>Description</b></label>
                                <textarea
                                    id="description"
                                    className="form-control"
                                    name="description"
                                    value={book.description}
                                    onChange={onInputChange}/>
                            </div>
                            {/* Price */}
                            <div className="form-group row">
                                <label htmlFor="price"><b>Price</b></label>
                                <input 
                                    type="text"
                                    id="price"
                                    className="form-control"
                                    name="price"
                                    value={book.price}
                                    onChange={onInputChange}/>
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
                                            id="bookCover"
                                            onChange={onCoverSelected}
                                            aria-describedby="bookCoverImage"/>
                                        <label 
                                            className="custom-file-label" 
                                            htmlFor="bookCover">
                                            Select Cover Image
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Submit */}
                        <div className="form-group row">
                            <div className="col-12">
                                <button type="submit" className="btn btn-lg btn-success">
                                    Add Book
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddBook;