
export interface ITodosActions {
    type: "TOGGLE_TODO" | "DELETE_TODO" | "ADD_TODO";
    payload: T1_todo;
}

export interface TGloabal_context {
    global_props: TGloabal_props;
    global_dispatch: React.Dispatch<ITodosActions>;
}

export class C1_current_user {
    email:string='';
    is_signed_in:boolean=false;
}

export interface TGloabal_props {
    todos: Array<T1_todo>;
    current_user:C1_current_user;
}

export interface T1_todo {
    id?: string;
    text?: string;
    completed?: boolean;
    is_active: boolean;
}
