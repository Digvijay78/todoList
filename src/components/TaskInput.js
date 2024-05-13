// TaskInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions';

const TaskInput = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setTask(e.target.value);
    };

    const handleSubmit = () => {
        if (task.trim() !== '') {
            dispatch(addTask({ note: task }));
            setTask('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div className="container mt-3">
            <div className="input-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter task" 
                    value={task} 
                    onChange={handleInputChange} 
                    onKeyPress={handleKeyPress} 
                />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button" onClick={handleSubmit}>Add Task</button>
                </div>
            </div>
        </div>
    );
};

export default TaskInput;
