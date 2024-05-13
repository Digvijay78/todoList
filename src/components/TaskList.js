// TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../actions';

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const handleToggleTask = (taskId) => {
        dispatch(toggleTask(taskId));
    };

    const handleDeleteTask = (taskId) => {
        dispatch(deleteTask(taskId));
    };

    return (
        <div className="container mt-3">
            <ul className="list-group">
                {tasks.map(task => (
                    <li key={task.id} className={task.completed ? 'list-group-item task-item completed' : 'list-group-item task-item'}>
                        <div className="row">
                            <div className="col">
                            <input type="checkbox" style={{ marginRight: '30px' }} className="mr-3" checked={task.completed} onChange={() => handleToggleTask(task.id)} />

                                <span className="font-weight-bold">{task.truncatedNote}</span>
                            </div>
                            <div className="col-auto">
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
