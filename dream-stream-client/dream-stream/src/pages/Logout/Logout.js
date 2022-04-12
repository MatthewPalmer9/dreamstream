import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "./logout.css";

export default function Logout() {
    const [cookies] = useCookies();
    const history = useNavigate();

    useEffect(() => {
        if (cookies.id) {
            history("/");
        }
    }, [cookies.id, history]);

    const handleRedirect = () => {
        history("/login");
    };

    return (
        <div className="logout-container">
            <h1>You have successfully logged out!</h1>
            <p>
                To sign back in,{" "}
                <button onClick={handleRedirect}>please click here.</button>
            </p>
        </div>
    );
}
