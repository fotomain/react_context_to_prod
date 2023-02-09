


import { ITodosActions, TGloabal_props } from "./globals_types";
export default function todosReducer(
    state: TGloabal_props,
    action: ITodosActions
): TGloabal_props {
    switch (action.type) {
        case "SETTER_USER": {
            console.log(action.global_new_data)
            return {
                ...state,
                current_user: action.global_new_data.user
            };
        }

        case "TOGGLE_TODO": {
            const toggledTodo = state.todos.map(item => {
                return item.id === action.global_new_data.id
                    ? { ...action.global_new_data,
                        completed: !action.global_new_data.completed,
                        is_active: !action.global_new_data.is_active,
                        }
                    : item;
            });
            return {
                ...state,
                todos: toggledTodo,
            };
        }
        case "DELETE_TODO": {
            const deletedTodo = state.todos.filter(item => {
                return item.id !== action.global_new_data.id;
            });
            return {
                ...state,
                todos: deletedTodo
            };
        }
        case "ADD_TODO": {
            const newTodo = {
                id: action.global_new_data.id,
                text: action.global_new_data.text,
                completed: action.global_new_data.completed,
                is_active: action.global_new_data.is_active,
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
