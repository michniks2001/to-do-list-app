import React from 'react';
import './styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="main">
                <li><a>Monthly View</a></li>
                <li><a>Weekly View</a></li>
                <li><a>Daily View</a></li>
            </ul>

            <ul className="user">
                <li>Log In</li>
                <li>Sign Up</li>
            </ul>
        </nav>
    );
};

export default Navbar;
