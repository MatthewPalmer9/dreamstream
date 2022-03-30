import React from 'react';
import './Landing.css';

export default function Landing() {
    return (
        <div className="container">
            <div className="grid-2-cols">
                <div className="left-side">
                    <h1 className="header">Endless Movies, TV, Shows, and more.</h1>
                    <p className="subheader">
                        Watch anywhere, anytime. Zero ads, zero headache, and for a low price you just can't beat.
                        Join now for a better streaming experience!
                    </p>
                </div>
                <div className="right-side">
                    <form className="sign-up-form"> 
                        <header>Sign Up</header>
                        <input placeholder="Email" />
                        <label htmlFor="email">Email:</label>
                        <input placeholder="Password" />
                        <label htmlFor="password">Password:</label>
                        <div className="form-submit-box">
                            <button>Create Account</button>
                            <a href="/">Already have an account? Sign in here!</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
