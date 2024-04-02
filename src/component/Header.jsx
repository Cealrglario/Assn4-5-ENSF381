import React from 'react';
import '../App.css';


function Header() {
    return (
            <div>
                <div className="header">
                    <img src="/images/logo.png" alt="company logo" />
                    <h2>Our Company</h2>
                </div>
                <div className="nav">
                    <nav>
                        <a href="/"> Home </a>
                        <a href="/Productpage"> Products </a>
                        <a href="/LoginPage"> Login </a>
                    </nav>
                </div>
            </div>
    )
}

export default Header;