import React from 'react';
import './styles.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-center">
                <ul className="nav-links">
                    <li>
                        <a href="">Products</a>
                    </li>
                    <li>
                        <a href="">Software</a>
                    </li>
                    <li>
                        <a href="">About Us/Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;