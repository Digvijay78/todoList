// TaskList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../actions';
import { updateTask } from '../actions';

const TaskList = () => {
    // Retrieve tasks from the Redux store
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();
    // State to manage the task being edited and its note
    const [editTaskId, setEditTaskId] = useState(null);
    const [editTaskNote, setEditTaskNote] = useState('');

    // Function to toggle the completion status of a task
    const handleToggleTask = (taskId) => {
        dispatch(toggleTask(taskId));
    };

    // Function to delete a task
    const handleDeleteTask = (taskId) => {
        dispatch(deleteTask(taskId));
    };

    // Function to enable editing of a task
    const handleEditTask = (task) => {
        // Set the task ID and note in the state to enable editing
        setEditTaskId(task.id);
        setEditTaskNote(task.note);
    };

    // Function to update a task
    const handleUpdateTask = (taskId) => {
        // Dispatch the updateTask action to update the task in the Redux store
        dispatch(updateTask(taskId, editTaskNote));

        // Reset the editTaskId and editTaskNote state after updating the task
        setEditTaskId(null);
        setEditTaskNote('');
    };

    return (
        <div className="container mt-3">
            <ul className="list-group">
                {tasks.map(task => (
                    <li key={task.id} className={task.completed ? 'list-group-item task-item completed' : 'list-group-item task-item'}>
                        <div className="row">
                            <div className="col">
                                {/* Checkbox to toggle the completion status of a task */}
                                <input type="checkbox" className="mr-3" checked={task.completed} onChange={() => handleToggleTask(task.id)} />
                                {/* Render an input field for editing the task if it is currently being edited */}
                                {editTaskId === task.id ? (
                                    <input type="text" className="form-control" value={editTaskNote} onChange={(e) => setEditTaskNote(e.target.value)} />
                                ) : (
                                    // Render the task's note if it is not being edited
                                    <span className="font-weight-bold mr-auto">{task.truncatedNote}</span>
                                )}
                            </div>
                            <div className="col-auto">
                                {/* Render an "Update" button if the task is being edited, otherwise render an "Edit" button */}
                                {editTaskId === task.id ? (
                                    <button className="btn btn-success btn-sm mr-2" onClick={() => handleUpdateTask(task.id)}>Update</button>
                                ) : (
                                    <button className="btn btn-info btn-sm mr-2" onClick={() => handleEditTask(task)}>Edit</button>
                                )}
                                {/* Render a "Delete" button for deleting the task */}
                                <button className="btn btn-danger btn-sm" onClick={() => handleDeleteTask(task.id)}>Delete</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
