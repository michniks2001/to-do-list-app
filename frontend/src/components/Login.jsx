import React, { useState } from 'react';
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
        console.log(`JWT: ${data.token}`);
    };

    return (
        <div className='form-container'>
            <h2>Login</h2>
            <form className='login-form' onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Login;