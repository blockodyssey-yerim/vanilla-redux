import { createStore } from "redux";

const Add = "Add";
const Delete = "Delete";

const addTodo = (text) => {
    return {
        type: Add,
        text,
    };
};

const deleteTodo = (id) => {
    return {
        type: Delete,
        id: parseInt(id),
    };
};
const reducer = (state = [], action) => {
    switch (action.type) {
        case Add:
            return [{ text: action.text, id: Date.now() }, ...state];
        case Delete:
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }
};

const store = createStore(reducer);

export const actionCreators = {
    addTodo,
    deleteTodo,
};
// store.subscribe();

export default store;
