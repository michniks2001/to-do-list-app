import React, { useEffect, useState } from 'react';
//import './styles/TaskView.css';

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

    return (
        <div className="calendar">
            {events.map(event => (
                <div key={event.id} className="event">
                    <div className="date">{formatDateTime(event.start_date)}</div>
                    <div className="details">
                        <h3>{event.task_name}</h3>
                        <p>{formatDateTime(event.deadline)}</p>
                        {!event.completed && (
                            <button onClick={() => handleComplete(event.id)}>Mark as Complete</button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskView;
