


import { ILogrecsActions, TGloabal_props } from "./globals_types";
export default function logrecsReducer(
    now_props: TGloabal_props,
    activity: ILogrecsActions
): TGloabal_props {
    switch (activity.type) {

        case "SETTER_APPLICATION": {
            console.log("SETTER_APPLICATION")
            console.log(activity.global_new_data)
                return {
                    ...now_props,
                    current_application: activity.global_new_data.current_application,
                };
        }
        case "SETTER_USER": {
            console.log("SETTER_USER")
            console.log(activity.global_new_data)
            return {
                ...now_props,
                current_user: activity.global_new_data.user
            };
        }

        case "TOGGLE_TODO": {
            const toggledLogrec = now_props.logrecs.map(item => {
                return item.id === activity.global_new_data.id
                    ? { ...activity.global_new_data,
                        completed: !activity.global_new_data.completed,
                        is_active: !activity.global_new_data.is_active,
                        }
                    : item;
            });
            return {
                ...now_props,
                logrecs: toggledLogrec,
            };
        }
        case "DELETE_TODO": {
            const deletedLogrec = now_props.logrecs.filter(item => {
                return item.id !== activity.global_new_data.id;
            });
            return {
                ...now_props,
                logrecs: deletedLogrec
            };
        }
        case "ADD_TODO": {
            const newLogrec = {
                id: activity.global_new_data.id,
                text: activity.global_new_data.text,
                completed: activity.global_new_data.completed,
                is_active: activity.global_new_data.is_active,
            };

            console.log('=== newLogrec',newLogrec)

            return {
                ...now_props,
                logrecs: [...now_props.logrecs, newLogrec]
            };
        }
        default: {
            return now_props;
        }
    }
}
