


import { ITodosActions, TGloabal_props } from "./globals_types";
export default function todosReducer(
    now_props: TGloabal_props,
    activity: ITodosActions
): TGloabal_props {
    switch (activity.type) {
        case "SETTER_USER": {
            console.log("SETTER_USER")
            console.log(activity.global_new_data)
            return {
                ...now_props,
                current_user: activity.global_new_data.user
            };
        }

        case "TOGGLE_TODO": {
            const toggledTodo = now_props.todos.map(item => {
                return item.id === activity.global_new_data.id
                    ? { ...activity.global_new_data,
                        completed: !activity.global_new_data.completed,
                        is_active: !activity.global_new_data.is_active,
                        }
                    : item;
            });
            return {
                ...now_props,
                todos: toggledTodo,
            };
        }
        case "DELETE_TODO": {
            const deletedTodo = now_props.todos.filter(item => {
                return item.id !== activity.global_new_data.id;
            });
            return {
                ...now_props,
                todos: deletedTodo
            };
        }
        case "ADD_TODO": {
            const newTodo = {
                id: activity.global_new_data.id,
                text: activity.global_new_data.text,
                completed: activity.global_new_data.completed,
                is_active: activity.global_new_data.is_active,
            };

            console.log('=== newTodo',newTodo)

            return {
                ...now_props,
                todos: [...now_props.todos, newTodo]
            };
        }
        default: {
            return now_props;
        }
    }
}
