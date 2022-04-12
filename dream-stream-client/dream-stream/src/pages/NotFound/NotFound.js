import React from "react";
import { useNavigate } from 'react-router-dom';
import './notfound.css';

export default function NotFound() {

    const history = useNavigate();

    const handleRedirect = () => {
        history("/");
    }
    
    return (
        <div className="nf-container">
            <h1>Uh Oh! &mdash; 404 Page Not Found</h1>
            <p>
                Whoops! Something has gone wrong. Either this route is broken or
                it simply does not exist. Please click <button onClick={handleRedirect}>here</button> to
                return to the home page.
            </p>
        </div>
    );
}
