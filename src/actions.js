// actions.js

export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: {
        id: new Date().getTime(),
        note: task.note,
        truncatedNote: task.note.length > 50 ? task.note.slice(0, 50) + '...' : task.note,
        completed: false
    }
});

export const toggleTask = (taskId) => ({
    type: 'TOGGLE_TASK',
    payload: taskId
});

export const deleteTask = (taskId) => ({
    type: 'DELETE_TASK',
    payload: taskId
});

export const updateTask = (taskId, newNote) => ({
    type: 'UPDATE_TASK',
    payload: { taskId, newNote }
});

export const editTask = (taskId, newNote) => ({
    type: 'EDIT_TASK',
    payload: { taskId, newNote }
});
