import { useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';
import './styles/Forms.css';

const Login = () => {
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
        Cookies.set('user_id', jwtDecode(data.access).user_id);
        console.log(Cookies.get('user_id'));
        window.location.href = "/calendar";
    };

    return (
        <div className='form-container'>
            <form className='main-form' onSubmit={handleSubmit}>
            <h2>Login</h2>
                <label>
                    <p>Email</p>
                    <input className="text-enter" type="email" value={email} onChange={handleEmailChange} />
                </label>
                <label>
                <p>Password</p>
                    <input className="text-enter" type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <button className="submit-button" type="submit">Login</button>
                <Link to="/sign-up">Don't have an account? Sign Up!</Link>

            </form>
        </div>
    );
};

export default Login;