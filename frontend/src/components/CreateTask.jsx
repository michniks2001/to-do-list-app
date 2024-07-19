import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import './styles/Forms.css'

const CreateTask = () => {
    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [deadline, setDeadline] = useState('');
    const [user, setUser] = useState('');

    useEffect(() => {
        setUser(Cookies.get('user_id'));
        console.log(user);
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:8000/tasks/create/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                task_name: title,
                start_date: startDate,
                deadline: deadline,
                author: parseInt(user)
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            window.location.href = '/calendar';
            window.alert('Task Created Successfully!')
        })
        .catch((error) => {
            window.alert('Error: Task Not Created!')
            console.error('Error:', error);
        });
    };

    if (user) {
        return (
            <div className="form-container">
                <form className="main-form" onSubmit={handleSubmit}>
                    <h2>Create Task</h2>
                    <label>Title:</label>
                    <input
                        className="text-enter"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <label>Start Date:</label>
                    <input
                        className="text-enter"
                        type="datetime-local"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                    <label>Deadline:</label>
                    <input
                        className="text-enter"
                        type="datetime-local"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        required
                    />
                    <button className="submit-button" type="submit">Create Task</button>
                </form>
            </div>
        );
    } else {
        return (
            <div className="form-container">
                <h2>Please Log In to Create Task</h2>
            </div>
        )
    }
};

export default CreateTask;
