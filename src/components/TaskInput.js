// TaskInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions';

const TaskInput = () => {
    // State to store the value of the input field
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    // Function to update the value of the input field as the user types
    const handleInputChange = (e) => {
        setTask(e.target.value);
    };

    // Function to handle form submission when the user clicks the "Add Task" button
    const handleSubmit = () => {
        // Check if the input field is not empty
        if (task.trim() !== '') {
            // Dispatch the addTask action with the new task's note
            dispatch(addTask({ note: task }));
            // Clear the input field after adding the task
            setTask('');
        }
    };

    // Function to handle form submission when the user presses the Enter key
    const handleKeyPress = (e) => {
        // Check if the Enter key is pressed
        if (e.key === 'Enter') {
            // Call the handleSubmit function to add the task
            handleSubmit();
        }
    };

    return (
        <div className="container mt-3">
            <div className="input-group">
                {/* Input field to enter the task */}
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter task" 
                    value={task} 
                    onChange={handleInputChange} 
                    onKeyPress={handleKeyPress} 
                />
                {/* Button to add the task */}
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button" onClick={handleSubmit}>Add Task</button>
                </div>
            </div>
        </div>
    );
};

export default TaskInput;
