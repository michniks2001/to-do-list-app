import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const ProfilePage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const currentUser = Cookies.get('user_id');

        fetch(`http://localhost:8000/users/profile/${currentUser}/`)
            .then((response) => response.json())
            .then((data) => setUser(data));
    }, []);

    console.log(user);

    return (
        <div>
            {user ? (
                <div>
                    <h2>Welcome, {user.first_name}</h2>
                    <h3>Email: {user.email}</h3>
                </div>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    );
};

export default ProfilePage;
