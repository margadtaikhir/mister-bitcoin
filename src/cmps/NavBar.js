import React from 'react';
import { NavLink } from 'react-router-dom';
export default function NavBar() {
    return <nav>
        <ul className="nav-bar">
            <li><NavLink activeClassName="active" to='/' exact>Home</NavLink></li>
            <li><NavLink activeClassName="active" to='/contacts'>Contacts</NavLink></li>
            {/* <li><NavLink activeClassName="active" to='/'>Statistics</NavLink></li> */}
        </ul>
    </nav>
}