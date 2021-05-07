import React from 'react'
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div className="navbar-container">
            <Link to="/login">Go to login</Link>
            <Link to="/register">Go to register</Link>
        </div>
    )
}

export default Nav
