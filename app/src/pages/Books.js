import React, { useState, useEffect } from 'react'

import SingleBook from '../components/Book'

export default function Home()
{
    let [ books, setBooks ] = useState([])
    
    useEffect(() => { getBooks() }, [])

    const getBooks = async () => {
        let response = await fetch('http://localhost:4000/books')
        let data = await response.json();
        setBooks(data.books)
    }

    let booksUI = books.map(book => <div key={book._id} className="col-md-4"><SingleBook book={book} /> </div> )
    
    return (
        <div className="container">
            <div className="jumbotron">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-1">
                            All Books
                        </h1>
                    </div>
                </div>
            </div>
            {/* Books */}
            <div className="row"> {booksUI} </div>
        </div>
    )
}