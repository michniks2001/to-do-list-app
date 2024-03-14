import React, { useState } from 'react';
import Cookies from 'js-cookie';
import './styles/Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:8000/users/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        localStorage.setItem('token', data.access);
        Cookies.set('token', data.access, { expires: 7 });
        console.log(`Token: ${data.access}`);
    };

    return (
        <div className='form-container'>
            <h2>Login</h2>
            <form className='login-form' onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input className="text-enter" type="email" value={email} onChange={handleEmailChange} />
                </label>
                <label>
                    Password:
                    <input className="text-enter" type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <input className="submit-button" type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Login;