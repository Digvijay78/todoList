const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || []
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            const newTask = {
                id: action.payload.id,
                note: action.payload.note,
                truncatedNote: action.payload.truncatedNote,
                completed: action.payload.completed
            };
            const newTasks = [...state.tasks, newTask];
            localStorage.setItem('tasks', JSON.stringify(newTasks)); // Save tasks to local storage
            return {
                ...state,
                tasks: newTasks
            };
        case 'TOGGLE_TASK':
            const updatedTasksToggle = state.tasks.map(task =>
                task.id === action.payload ? { ...task, completed: !task.completed } : task
            );
            localStorage.setItem('tasks', JSON.stringify(updatedTasksToggle)); // Update tasks in local storage
            return {
                ...state,
                tasks: updatedTasksToggle
            };
        case 'DELETE_TASK':
            const filteredTasks = state.tasks.filter(task => task.id !== action.payload);
            localStorage.setItem('tasks', JSON.stringify(filteredTasks)); // Update tasks in local storage
            return {
                ...state,
                tasks: filteredTasks
            };
            case 'UPDATE_TASK':
                const updatedTasks = state.tasks.map(task => {
                    if (task.id === action.payload.taskId) {
                        return {
                            ...task,
                            note: action.payload.newNote,
                            truncatedNote: action.payload.newNote.length > 50 ? action.payload.newNote.slice(0, 50) + '...' : action.payload.newNote
                        };
                    }
                    return task;
                });
                localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Update tasks in local storage
                return {
                    ...state,
                    tasks: updatedTasks
                };
        default:
            return state;
    }
};

export default todoReducer;
