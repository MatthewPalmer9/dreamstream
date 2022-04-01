import React, { useState } from 'react';

export default function SignUp() {

    const [ signUpData, setSignUpData ] = useState({});

    const handleChange = (e) => {
        setSignUpData({
            ...signUpData,
            [e.target.name]: e.target.value
        });
        // console.log(signUpData);
    };

    return (
        <form className="sign-up-form"> 
            <header>Sign Up</header>

            <div className="input-field">
                <input onChange={handleChange} name="name" type="text" placeholder="Email" />
                <label htmlFor="name">Name:</label>
            </div>

            <div className="input-field">
                <input onChange={handleChange} name="email" type="email" placeholder="Email" />
                <label htmlFor="email">Email:</label>
            </div>

            <div className="input-field">
                <input onChange={handleChange} name="password" type="password" placeholder="Password" />
                <label htmlFor="password">Password:</label>
            </div>
            
            <div className="input-field">
                <input onChange={handleChange} name="confirmPassword" type="password" placeholder="Password" />
                <label htmlFor="password">Confirm Password:</label>
            </div>

            <div className="form-submit-box">
                <button>Create Account</button>
                    <a href="/">Already have an account? Sign in here!</a>
            </div>
        </form>
    )
}
