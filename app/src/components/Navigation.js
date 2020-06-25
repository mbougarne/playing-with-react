import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

import Icon from './FontIcon'

import '../css/Navigation.css'

export default function Navigation()
{
    let [toggle, setToggle] = useState(false)

    return (
        <>
            <div className="nav-toggle-container" onClick={() => setToggle(toggle = !toggle)}>
                <Icon name="fas fa-bars"/>
            </div>
            {
                (toggle)
                    ?
                    <nav className="sidebar">
                        <div className="my-0 mx-auto">
                            <ul className="nav flex-column">
                                <li className="navigation-item">
                                    <NavLink 
                                        exact 
                                        to="/" className="navigation-link" 
                                        activeClassName="active"
                                        onClick={() => setToggle(toggle = !toggle)}> Home </NavLink>
                                </li>
                                <li className="navigation-item">
                                    <NavLink 
                                        exact to="/books" 
                                        className="navigation-link" 
                                        activeClassName="active"
                                        onClick={() => setToggle(toggle = !toggle)}> Books </NavLink>
                                </li>
                                <li className="navigation-item">
                                    <NavLink 
                                        exact to="/create-book" 
                                        className="navigation-link" 
                                        activeClassName="active"
                                        onClick={() => setToggle(toggle = !toggle)}> Add Book </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    :
                    ''
            }
        </>
    )
}