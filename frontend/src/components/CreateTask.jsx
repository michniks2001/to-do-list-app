import Cookies from 'js-cookie';
import { useState } from 'react';
//import './styles/CreateTask.css'

const CreateTask = () => {
    const [taskName, setTaskName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch('http://localhost:8000/tasks/create/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                task_name: taskName,
                start_date: startDate,
                deadline: deadline,
                author: Cookies.get('user_id'),
            }),
        })
        .then(response => response.json())
        .then(data => {
            // Assuming data contains the newly created task object
            console.log('Success:', data);
            setTaskName('');
            setStartDate('');
            setDeadline('');
            //window.location.href = "/calendar";
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    if (Cookies.get('user_id') === undefined) {
        return (
            <h2>Log In to create a task</h2>
        )
    }

    return (
        <div className="form-container">
            <form className="main-form" onSubmit={handleSubmit}>
            <h2>Create Task</h2>
                <label>
                    <p>Task Name</p>
                    <input
                        className="text-enter"
                        type="text"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <p>Start Date</p>
                    <input
                        className="text-enter"
                        type="datetime-local"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <p>Deadline</p>
                    <input
                        className="text-enter"
                        type="datetime-local"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        required
                    />
                </label>
                <button className="submit-button" type="submit">Create Task</button>
            </form>
        </div>
    );
};

export default CreateTask;
