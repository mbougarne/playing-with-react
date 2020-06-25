import React, {useState, useEffect} from 'react'

import '../css/Book.css'

export default function Home()
{
    let [books, setBooks] = useState([{}])

    useEffect( () => {

        ( async () => {

            let response = await fetch('http://localhost:4000/books')
            let data = await response.json()
            setBooks(data.books.slice(0,3))
        })()

    }, []) 

    return (
        <div className="container">
            {/* Jumbotron */}
            <div className="row mb-5">
                <div className="col-12">
                    <h1 className="display-1">
                        Your Books List
                    </h1>
                </div>
            </div>
            {/* Books */}
            <div className="row">
                {
                    books.map(book => (
                        <div 
                            className="col-md-4 col-sm-6 " 
                            key={(typeof book._id !== 'undefined') ? book._id : Math.random().toString()}>
                            <a href={'/books/' + book._id}>
                                <div className="card bg-white shadow-sm mb-5">
                                    {/* Price */}
                                    <div className="price-container">
                                        <span className="badge badge-price p-2 shadow-sm" style={{fontSize: '14px'}}>
                                            {book.price}
                                        </span>
                                    </div>
                                    {/* Cover Container */}
                                    <div className="book-cover-container">
                                        {
                                            (typeof book.coverImage !== 'undefined' && book.coverImage !== '') 
                                            ? 
                                                <img 
                                                    src={'http://localhost:4000/media/books/covers/' + book.coverImage} 
                                                    alt={book.title} 
                                                    className="card-img-top img-fluid"
                                                    
                                                    />
                                            :
                                                <img 
                                                    src="../images/no-image.jpg" 
                                                    alt={book.title} 
                                                    className="card-img-top img-fluid"/>
                                        }
                                    </div>
                                </div>
                            </a>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}