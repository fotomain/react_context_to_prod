
import {SettingsActions, globals_settings_element_type, ShoppingCartActions, globals_crud_names} from "./globals_crud_names";

export const globals_props_Reducer = (
    globals_data: globals_settings_element_type[],
    activity: SettingsActions | ShoppingCartActions
) => {
    switch (activity.type) {
        case globals_crud_names.Create:
            return [
                ...globals_data,
                {
                    line_guid: activity.payload.line_guid,
                    line_name: activity.payload.line_name,
                    line_value: activity.payload.line_value
                }
            ];
        case globals_crud_names.Delete:
            return [...globals_data.filter(product => product.line_guid !== activity.payload.line_guid)];
        default:
            return globals_data;
    }
};

export const shoppingCartReducer = (
    globals_data: number,
    activity: SettingsActions | ShoppingCartActions
) => {
    switch (activity.type) {
        case globals_crud_names.Add:
            return globals_data + 1;
        default:
            return globals_data;
    }
};
