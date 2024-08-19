import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="/logo192.png" alt="Company Logo" />
            </div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/search-projects">Search Projects</Link>
            </div>
        </nav>
    );
}

export default Navbar;
