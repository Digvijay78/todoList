// This action creator is responsible for adding a new task to the Redux store.
export const addTask = (task) => ({
    type: 'ADD_TASK',                          // Action type to identify this action
    payload: {                                // Payload containing the new task details
        id: new Date().getTime(),                    // Generate a unique id for the task using the current timestamp
        note: task.note,                                    // Get the note from the input task object
        truncatedNote: task.note.length > 50 ? task.note.slice(0, 50) + '...' : task.note, // Truncate the note if it's longer than 50 characters
        completed: false // Initialize the task as not completed
    }
});

// This action creator is responsible for toggling the completion status of a task.
export const toggleTask = (taskId) => ({
    type: 'TOGGLE_TASK',                       // Action type to identify this action
    payload: taskId                           // Payload containing the ID of the task to toggle
});

// This action creator is responsible for deleting a task from the Redux store.
export const deleteTask = (taskId) => ({
    type: 'DELETE_TASK', // Action type to identify this action
    payload: taskId // Payload containing the ID of the task to delete
});

// This action creator is responsible for updating the note of a task in the Redux store.
export const updateTask = (taskId, newNote) => ({
    type: 'UPDATE_TASK', // Action type to identify this action
    payload: { taskId, newNote } // Payload containing the ID of the task and the updated note
});

// This action creator is responsible for editing the note of a task in the Redux store.
export const editTask = (taskId, newNote) => ({
    type: 'EDIT_TASK', // Action type to identify this action
    payload: { taskId, newNote } // Payload containing the ID of the task and the updated note
});
