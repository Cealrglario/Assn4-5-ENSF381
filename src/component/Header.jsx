import React from 'react';
import {useNavigate} from 'react-router-dom';


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
                                <a href="/"> Home </a>
                            </li>
                            <li>
                                <a href="/Productpage"> Products </a>
                            </li>
                            <li>
                                <a href="/Login"> Login </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
    )
}

export default Header;