import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import './styles/ProfilePage.css';

const ProfilePage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const currentUser = Cookies.get('user_id');

        fetch(`http://localhost:8000/users/profile/${currentUser}/`)
            .then((response) => response.json())
            .then((data) => setUser(data));
    }, []);

    function handleLogout() {
        Cookies.remove('user_id');
        window.location.reload();
    }
    return (
        <div>
            {user ? (
                <div className="profile-container">
                    <h2 className="header">Welcome, {user.first_name} {user.last_name}</h2>
                    <button className="edit-button" onClick={() => window.location.href="/update-name"}>Edit</button>
                    <h2 className="header">Email: {user.email} 
                    </h2>
                    <button className="edit-button">Edit</button>
                    <button className="logout-button" onClick={handleLogout}>Log Out</button>
                </div>
            ) : (
                <h2>Log In to view Profile</h2>
            )}
        </div>
    );
};

export default ProfilePage;
