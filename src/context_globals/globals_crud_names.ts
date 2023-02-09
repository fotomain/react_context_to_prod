
export type globals_settings_element_type = {
    line_guid: string;
    line_name: string;
    line_value: string;
};

export type globals_crud_actions_type = {
    [globals_crud_names.Create]: {
        line_guid: string;
        line_name: string;
        line_value: string;
    };
    [globals_crud_names.Delete]: {
        line_guid: string;
    };
};

export type globals_initial_state_type = {
    settings_array: globals_settings_element_type[];
    shoppingCart: number;
};

export enum globals_crud_names {

        Create  = "CREATE_SETTING_LINE",
        Delete  = "DELETE_SETTING_LINE",
        Add     = "ADD_SETTING_LINE"

}


export type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
        ? {
            type: Key;
        }
        : {
            type: Key;
            payload: M[Key];
        }
};

export type SettingsActions = ActionMap< globals_crud_actions_type >[ keyof ActionMap< globals_crud_actions_type > ];

export type ShoppingCartPayload = {
    [globals_crud_names.Add]: undefined;
    // data_set:any;
};

export type ShoppingCartActions = ActionMap< ShoppingCartPayload >[keyof ActionMap< ShoppingCartPayload >];


export interface initialStateType {
    settings_array: Array<globals_settings_element_type>,
    shoppingCart: number
};
