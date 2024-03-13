import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="main">
                <li key="main"><Link to="/">
                    Calendar
                </Link></li>
                <li key="tasks">
                <Link to="/task-view">
                    Task View
                </Link>
                </li>
            </ul>

            <ul className="user">
                <li key="login">Log In</li>
                <li key="sign-up"><Link to="/sign-up">Sign Up</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
