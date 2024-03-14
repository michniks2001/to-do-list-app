import React, { useState } from 'react';
import './styles/Login.css';

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
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <label>Email:
            <input
                className="text-enter"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>Password:
            <input
                className="text-enter"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <label>First Name:
            <input
                className="text-enter"
                type="text"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <label>Last Name:
            <input
                className="text-enter"
                type="text"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <button className="submit-button" type="submit">Sign Up!</button>
        </form>
        </div>

    );
};

export default SignUp;