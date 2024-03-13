import React, { useState } from 'react';
import './styles/SignUp.css';

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
        <form className="sign-up-form" onSubmit={handleSubmit}>
            <label>Email:
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>Password:
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <label>First Name:
            <input
                type="text"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <label>Last Name:
            <input
                type="text"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <button type="submit">Sign Up!</button>
        </form>

    );
};

export default SignUp;