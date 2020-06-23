import React, { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

import '../css/Single.css'
import UpdateBar from '../components/UpdateBookBar'

function SingleBook()
{
    const { id } = useParams()
    let [book, setBook] = useState({})
    
    useEffect( () => {
        (async function() {
            let response = await fetch('http://localhost:4000/books/' + id)
            let fetchedBook = await response.json()
            setBook(fetchedBook.book)
        })()
    }, [id])
    
    return (
        <div className="container mt-5 mb-5 pb-5">
            {/* Book Author and Title */}
            <div className="row">
                <div className="col-12">
                    {/* Title */}
                    <h1>
                        {book.title}
                    </h1>
                    {/* Author */}
                    <p>
                        <span className="text-muted">
                            By {book.author} &mdash; <em>ISBN: {book.isbn}</em>
                        </span> 
                    </p>
                </div>
            </div>
            {/* Book Cover and Description */}
            <div className="row no-gutters">
                {/* Cover */}
                <div className="col-md-5">
                    <div className="price-container">
                        <span className="badge badge-price p-2 shadow-sm" style={{fontSize: '14px'}}>
                            {book.price}
                        </span>
                    </div>
                    <img 
                        src={'http://localhost:4000/media/books/covers/' + book.coverImage} 
                        alt={book.title} 
                        className="card-img-top img-fluid"/>
                </div>
                {/* Details */}
                <div className="col-md-7">
                    <div className="card-body">
                        {/* Description */}
                        <div className="description">
                            {book.description}
                        </div>
                    </div>
                </div>
            </div>
            {/* Update Book Bar */}
            <UpdateBar title={book.title} id={book._id} />
        </div>
    )

}

export default SingleBook