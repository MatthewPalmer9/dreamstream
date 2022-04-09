import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';


export default function LogIn(props) {

    const [ loginData, setLoginData ] = useState({});
    const [ error, setError ] = useState(false);
    const [ cookies ] = useCookies();
    const { handleLogin, setLoggedIn, loggedIn } = props;
    const history = useNavigate();

    // STATE OF FORM
    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    // LOGIN
    const login = async e => {
        setError(false);
        await handleLogin(e, loginData)
        .catch(err => {
            setError(true);
        });
    };

    // REDIRECT IF NO ERRORS && LOGGED IN
    if(!error && loggedIn) {
        history("/")
    }

    return (
        <form onSubmit={login} style={{maxWidth: '80rem', margin: '0 auto', marginTop: '10rem'}}className="sign-up-form"> 
            <header>Login</header>
            
            {error ? (
                <span className="error-field">Email or password is incorrect</span>
            ) : (null)}

            <div className="input-field">
                <input onChange={handleChange} name="email" type="email" placeholder="Email" required />
                <label htmlFor="email">Email:</label>
            </div>

            <div className="input-field">
                <input onChange={handleChange} name="password" type="password" placeholder="Password" required />
                <label htmlFor="password">Password:</label>
            </div>

            <div className="form-submit-box">
                <button>Sign me in!</button>
                    <a href="/">Don't have an account yet? Sign up here!</a>
            </div>
        </form>
    )
}
