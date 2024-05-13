// reducers.js
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
            const updatedTasks = state.tasks.map(task =>
                task.id === action.payload ? { ...task, completed: !task.completed } : task
            );
            localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Update tasks in local storage
            return {
                ...state,
                tasks: updatedTasks
            };
        case 'DELETE_TASK':
            const filteredTasks = state.tasks.filter(task => task.id !== action.payload);
            localStorage.setItem('tasks', JSON.stringify(filteredTasks)); // Update tasks in local storage
            return {
                ...state,
                tasks: filteredTasks
            };
        default:
            return state;
    }
};

export default todoReducer;
