import React from 'react';
import SignUpForm from '../../components/Forms/SignUp.jsx';
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
                    <SignUpForm />
                </div>
            </div>
        </div>
    )
}
