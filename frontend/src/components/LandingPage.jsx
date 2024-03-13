import React from 'react';
import './styles/LandingPage.css';

const LandingPage = () => {

    return (
        <div className="landing-page">
            <div className="header">
                <h1>Task Manager</h1>
                <p>A simple way to organize your tasks</p>
            </div>
            <div className="features">
                <div className="feature">
                    <h2>Easy Task Management</h2>
                    <p>Organize your tasks by project, due date, and priority.</p>
                </div>
                <div className="feature">
                    <h2>Collaborate with Others</h2>
                    <p>Share tasks with your team and track progress together.</p>
                </div>
                <div className="feature">
                    <h2>Stay Organized</h2>
                    <p>Never miss a deadline with reminders and notifications.</p>
                </div>
            </div>
            <div className="cta">
                <button>Get Started</button>
            </div>
        </div>
    );
};

export default LandingPage;
