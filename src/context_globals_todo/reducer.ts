


import { ITodosActions, ITodosState } from "./globals_types";
export default function todosReducer(
    state: ITodosState,
    action: ITodosActions
): ITodosState {
    switch (action.type) {
        case "TOGGLE_TODO": {
            const toggledTodo = state.todos.map(item => {
                return item.id === action.payload.id
                    ? { ...action.payload,
                        completed: !action.payload.completed,
                        is_active: !action.payload.is_active,
                        }
                    : item;
            });
            return {
                ...state,
                todos: toggledTodo
            };
        }
        case "DELETE_TODO": {
            const deletedTodo = state.todos.filter(item => {
                return item.id !== action.payload.id;
            });
            return {
                ...state,
                todos: deletedTodo
            };
        }
        case "ADD_TODO": {
            const newTodo = {
                id: action.payload.id,
                text: action.payload.text,
                completed: action.payload.completed,
                is_active: action.payload.is_active,
            };

            console.log('=== newTodo',newTodo)

            return {
                ...state,
                todos: [...state.todos, newTodo]
            };
        }
        default: {
            return state;
        }
    }
}
