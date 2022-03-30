import React from 'react';

export default function SignUp() {
    return (
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
    )
}
