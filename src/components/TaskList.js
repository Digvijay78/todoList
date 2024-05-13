// TaskList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../actions';
import { updateTask } from '../actions';

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();
    const [editTaskId, setEditTaskId] = useState(null);
    const [editTaskNote, setEditTaskNote] = useState('');

    const handleToggleTask = (taskId) => {
        dispatch(toggleTask(taskId));
    };

    const handleDeleteTask = (taskId) => {
        dispatch(deleteTask(taskId));
    };

    const handleEditTask = (task) => {
        setEditTaskId(task.id);
        setEditTaskNote(task.note);
    };

    const handleUpdateTask = (taskId) => {
        // Update the task in the Redux store
        console.log('Updating task in Redux store:', taskId, editTaskNote);
        dispatch(updateTask(taskId, editTaskNote));

        // Reset editTaskId and editTaskNote
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
                                <input type="checkbox" className="mr-3" checked={task.completed} onChange={() => handleToggleTask(task.id)} />
                                {editTaskId === task.id ? (
                                    <input type="text" className="form-control" value={editTaskNote} onChange={(e) => setEditTaskNote(e.target.value)} />
                                ) : (
                                    <span className="font-weight-bold mr-auto">{task.truncatedNote}</span>
                                )}
                            </div>
                            <div className="col-auto">
                                {editTaskId === task.id ? (
                                    <button className="btn btn-success btn-sm mr-2" onClick={() => handleUpdateTask(task.id)}>Update</button>
                                ) : (
                                    <button className="btn btn-info btn-sm mr-2" onClick={() => handleEditTask(task)}>Edit</button>
                                )}
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
