import React from 'react'
import { NavLink } from 'react-router-dom'

import './nav.css'



function Nav({favCount}) {
    return(
        <nav className="nav">
        <div className="hamburger-menu">
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3 "></div>
        </div>
        <ul className="nav-list">
            <li className="nav-item">
                <NavLink activeClassName="selected" exact to='/' className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeClassName="selected" to='/about' className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeClassName="selected" to='/foodsPage' className="nav-link">Foods</NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeClassName="selected" to='/favourite' className="nav-link">Favourite{favCount ? ` (${favCount})` : ''}</NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeClassName="selected" to='/contact' className="nav-link">Contact</NavLink>
            </li>
        </ul>
    </nav>
    )
}

export default Nav