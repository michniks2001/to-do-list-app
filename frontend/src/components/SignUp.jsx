import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Forms.css';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/users/sign-up/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email, first_name, last_name, password}),
            });
            if(!response.ok) {
                throw new Error("Sign up failed");
            }
            const data = await response.json();
        } catch(error) {
            console.error(error.message);
        }
    };

    return (
        <div className="form-container">
        <form className="main-form" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <label>
                <p>Email</p>
            <input
                className="text-enter"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>
                <p>Password</p>
            <input
                className="text-enter"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <label>
                <p>First Name</p>
            <input
                className="text-enter"
                type="text"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <label>
                <p>Last Name</p>
            <input
                className="text-enter"
                type="text"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <button className="submit-button" type="submit">Sign Up!</button>
            <Link to="/login">Already have an account? Log in here</Link>
        </form>
        </div>

    );
};

export default SignUp;