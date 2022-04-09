import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

export default function Navbar(props) {
    const { loggedIn, user, handleLogout } = props;
    const history = useNavigate();
    const [cookies, setCookie, removeCookie ] = useCookies([]);
    console.log("COOKIES", cookies)

    useEffect(() => {

    }, [loggedIn, cookies.id]);

    const redirectToLogin = e => {
        e.preventDefault();
        history('/login');
    };

    const logout = async e => {
        e.preventDefault();
        await handleLogout()
        .then(history("/"));
    };
    
    return (
        <nav className="navbar">
            <div className="nav-brand">Dream<span>Stream</span></div>
            <ul className="nav-list">
                    <li className="list-item">
                        {loggedIn ? (
                            <>
                                <span className="user-greeting">Hello, {user}!</span>
                                <button onClick={logout}>Log Out</button>
                            </>
                        ): (
                            <a href="/">
                                <button onClick={redirectToLogin}>Sign In</button>
                            </a>
                        )}
                    </li>
            </ul>
        </nav>
    )
}
