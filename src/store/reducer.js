import { ADD_TASK, REMOVE_TASK } from './constans';

const initialState = {
    todos: [],
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, todos: [...state.todos, { id: Date.now(), text: action.payload }] }
        case REMOVE_TASK:
            return { ...state, todos: [...state.todos.filter(todo => todo.id !== action.payload)] }
        default:
            return state
    }
};

export default reducer;