import React, { useEffect, useState } from "react";
import "./Landing.css";

export default function Landing() {
    const [signUpData, setSignUpData] = useState({});

    const handleChange = (e) => {
        setSignUpData({
            ...signUpData,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        const header = document.querySelector(".header");
        const subheader = document.querySelector(".subheader");

        setTimeout(() => {
            header.classList.toggle("fadeInUp");
            subheader.classList.toggle("fadeInUp");
        }, 1000);
    }, []);

    return (
        <div className="container">
            <div className="grid-2-cols">
                <div className="left-side">
                    <h1 className="header">
                        Endless Movies, TV, Shows, and more.
                    </h1>
                    <p className="subheader">
                        Watch anywhere, anytime. Zero ads, zero headache, and
                        for a low price you just can't beat. Join now for a
                        better streaming experience!
                    </p>
                </div>
                <div className="right-side">
                    <form className="sign-up-form">
                        <header>Sign Up</header>

                        <div className="input-field">
                            <input
                                onChange={handleChange}
                                name="name"
                                type="text"
                                placeholder="Email"
                            />
                            <label htmlFor="name">Name:</label>
                        </div>

                        <div className="input-field">
                            <input
                                onChange={handleChange}
                                name="email"
                                type="email"
                                placeholder="Email"
                            />
                            <label htmlFor="email">Email:</label>
                        </div>

                        <div className="input-field">
                            <input
                                onChange={handleChange}
                                name="password"
                                type="password"
                                placeholder="Password"
                            />
                            <label htmlFor="password">Password:</label>
                        </div>

                        <div className="input-field">
                            <input
                                onChange={handleChange}
                                name="confirmPassword"
                                type="password"
                                placeholder="Password"
                            />
                            <label htmlFor="password">Confirm Password:</label>
                        </div>

                        <div className="form-submit-box">
                            <button>Create Account</button>
                            <a href="/">
                                Already have an account? Sign in here!
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
