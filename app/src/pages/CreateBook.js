import React from 'react'

import AddBook from '../components/AddBook'

export default function CreateBook()
{
    return (
        <div className="container">
            {/* Jumbotron */}
                <div className="jumbotron">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-1">
                            Add Book
                        </h1>
                        <p className="lead">
                            Add new book to your list
                        </p>
                    </div>
                </div>
            </div>
            {/* Add Book Form */}
            <div className="mt-5 mb-5"></div>
            {/* The Form */}
            <AddBook />
        </div>
    )
}