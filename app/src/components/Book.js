import React from 'react'

import '../css/Book.css'

export default props => {
    return (
        <div className="card bg-white shadow  mb-5">
            {/* Price */}
            <div className="price-container">
                <span className="badge badge-price p-2 shadow-sm" style={{fontSize: '14px'}}>
                    {props.book.price}
                </span>
            </div>
            {/* Cover Container */}
            <div className="book-cover-container">
                {
                    (props.book.coverImage !== '') ? 
                        <img 
                            src={'http://localhost:4000/media/books/covers/' + props.book.coverImage} 
                            alt={props.book.title} 
                            className="card-img-top img-fluid"
                            
                            />
                    :
                    <img 
                        src='http://localhost:4000/media/books/covers/63566238506919311592002502961.jpeg' 
                        alt={props.book.title} 
                        className="card-img-top img-fluid"/>
                }
            </div>
            <div className="card-body border-none">
                {/* title */}
                <div style={{clear: 'both'}}>
                    <h4 className="card-title">
                        <span className="mb-2">
                            {props.book.title}
                        </span>
                        {/* Author */}
                        <small 
                            className="text-primary float-right" 
                            style={{ fontSize: '12px'}}>
                            <b>By {props.book.author}</b>
                        </small> 
                    </h4>
                </div>
                {/* Description */}
                <div className="description">
                    <small className="text-muted">
                        {(props.book.description) ? props.book.description.substring(0, 200).toLowerCase() + '...' : ''}
                    </small>
                </div>
                {/* Learn More */}
                <div className="mt-3 pb-3">
                    {/* ISBN */}
                    <span>
                        <small className="text-muted">ISBN: {props.book.isbn}</small>
                    </span>
                    {/* More >> */}
                    <a href={'/books/' + props.book._id} className="btn btn-primary shadow float-right">
                        Read More
                    </a>
                </div>
            </div>
        </div>
    )
}