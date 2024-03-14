import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const ProfilePage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const token = Cookies.get('token');
            if (token) {
                const response = await fetch(`http://localhost:8000/users/profile/${user.id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                setUser(data);
            }
        };
        fetchUserData();
    }, []);

    const sendToSignUp = () => {
        window.location.href = '/sign-up';
    };

    const sendToLogIn = () => {
        window.location.href = '/login';
    };

    return (
        <div>
            {user ? (
                <div>
                    <h2>Welcome, {user.first_name}</h2>
                    <h3>Email: {user.email}</h3>
                </div>
            ) : (
                <div>
                    <h2>You are not logged in!</h2>
                    <h3>Sign up or log in to view your profile:</h3>
                    <button onClick={sendToSignUp}>Sign Up</button>
                    <button onClick={sendToLogIn}>Log In</button>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
