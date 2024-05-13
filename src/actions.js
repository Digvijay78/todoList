// actions.js
export const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        payload: {
            id: new Date().getTime(),
            note: task.note,
            truncatedNote: task.note.length > 50 ? task.note.slice(0, 50) + '...' : task.note,
            completed: false
        }
    };
};

export const toggleTask = (taskId) => ({
    type: 'TOGGLE_TASK',
    payload: taskId
});

export const deleteTask = (taskId) => ({
    type: 'DELETE_TASK',
    payload: taskId
});
