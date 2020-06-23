/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'

import MenUContext from '../context/MenuContext'

import '../css/Navigation.css'

export default function Navigation()
{
    let [showMenu, setMenu] = useContext(MenUContext)

    return (
        <nav className="sidebar">
            <div className="my-0 mx-auto">
                <ul className="nav flex-column">
                    <li className="navigation-item">
                        <NavLink 
                            exact 
                            to="/" className="navigation-link" 
                            activeClassName="active"
                            onClick={() => setMenu(showMenu = !showMenu)}> Home </NavLink>
                    </li>
                    <li className="navigation-item">
                        <NavLink 
                            exact to="/books" 
                            className="navigation-link" 
                            activeClassName="active"
                            onClick={() => setMenu(showMenu = !showMenu)}> Books </NavLink>
                    </li>
                    <li className="navigation-item">
                        <NavLink 
                            exact to="/create-book" 
                            className="navigation-link" 
                            activeClassName="active"
                            onClick={() => setMenu(showMenu = !showMenu)}> Add Book </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}