import React from 'react';
import Link from 'react-router-dom';

function Header() {
    return (
        <div>
            <div className="header">
                <h1>Our Company</h1>
            </div>
            <div className="nav">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Our Products</Link>
                        </li>
                        <li>
                            <Link to="/login">Login Here!</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;