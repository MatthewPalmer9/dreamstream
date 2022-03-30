import React from 'react';
import './navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-brand">Dream<span>Stream</span></div>
            <ul className="nav-list">
                <a href="/">
                    <li className="list-item">
                        <button>Sign In</button>
                    </li>
                </a>
            </ul>
        </nav>
    )
}
