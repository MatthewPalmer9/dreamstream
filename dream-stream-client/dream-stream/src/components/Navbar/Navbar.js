import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

export default function Navbar(props) {
    const { loggedIn, user, handleLogout } = props;
    const history = useNavigate();

    const redirectToLogin = (e) => {
        e.preventDefault();
        history("/login");
    };

    const logout = async (e) => {
        e.preventDefault();
        await handleLogout().then(history("/logout"));
    };

    return (
        <nav className="navbar">
            <div className="nav-brand">
                <a href="/">Dream<span>Stream</span></a>
            </div>
            <ul className="nav-list">
                <li className="list-item">
                    {loggedIn ? (
                        <>
                            <span className="user-greeting">
                                Hello, {user}!
                            </span>
                            <button onClick={logout}>Log Out</button>
                        </>
                    ) : (
                        <a href="/">
                            <button onClick={redirectToLogin}>Sign In</button>
                        </a>
                    )}
                </li>
            </ul>
        </nav>
    );
}
