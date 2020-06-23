import React from 'react'

import { Link } from 'react-router-dom'

import Icon from './FontIcon'
import '../css/update-book-bar.css'

export default props => {
    return (
        <div className="update-book-bar">
            <h3>
                <Icon name="fas fa-pen"/> <span>Update:</span> {props.title} &mdash; Book.
                <Link 
                    to={'/books/update/' + props.id}
                    className="btn btn-warning shadow btn-sm float-right mr-5">
                    <Icon name="far fa-edit"/> Update Book
                </Link>
            </h3>
        </div>
    )
}