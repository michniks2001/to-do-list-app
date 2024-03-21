import { useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import './styles/TaskView.css';

const TaskView = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/tasks/list/')
            .then(response => response.json())
            .then(data => setEvents(data));
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    const formatTime = (dateString) => {
        const date = new Date(dateString);
        const options = { hour: '2-digit', minute: '2-digit', hour12: false };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    const formatDateTime = (dateString) => {
        return `${formatDate(dateString)} at ${formatTime(dateString)}`;
    };

    const handleComplete = (id) => {
        fetch(`http://localhost:8000/tasks/${id}/complete/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ completed: true }),
        })
        .then(response => {
            if (response.ok) {
                const updatedEvents = events.map(event => {
                    if (event.id === id) {
                        return { ...event, completed: true };
                    }
                    return event;
                });
                setEvents(updatedEvents);
            }
        });
    };

    if (Cookies.get('user_id') === undefined) {
        return (
            <h2>Log In to view Tasks</h2>
        )
    }

    return (
        <div className="calendar">
            <h1>All Task Details</h1>
            {events.map(event => (
                <div key={event.id} className="event">
                    <div className="details">
                        <h3>{event.task_name}</h3>
                        <p className="start-date">Start: {formatDateTime(event.start_date)}</p>
                        <p className="deadline">End: {formatDateTime(event.deadline)}</p>
                        {!event.completed ? (
                            <button className="completed" onClick={() => handleComplete(event.id)}>Mark as Completed</button>
                        ) : (
                            <button className="completed" style={{ cursor: "default"}}>Completed</button>
                        
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskView;
