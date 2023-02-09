
export interface ITodosActions {
    type: "SETTER_USER" | "TOGGLE_TODO" | "DELETE_TODO" | "ADD_TODO";
    global_new_data: T1_todo | any;
}

export interface TGloabal_context {
    global_props: TGloabal_props;
    global_dispatch: React.Dispatch<ITodosActions>;
}

// export class C1_current_user {
//
//     email:string='';
//     is_signed_in:boolean=false;
//
// }

export interface TGloabal_props {
    todos: Array<T1_todo>;
    current_user: any; //C1_current_user;
}

export interface T1_todo {
    id?: string;
    text?: string;
    completed?: boolean;
    is_active: boolean;
}
