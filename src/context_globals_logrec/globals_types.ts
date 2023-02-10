
export interface ILogrecsActions {
    type:     "SETTER_USER"
            | "SETTER_APPLICATION"
            | "TOGGLE_TODO"
            | "DELETE_TODO"
            | "ADD_TODO";
    global_new_data: T1_logrec | any;
}

export interface TGloabal_context {
    global_props: TGloabal_props;
    global_dispatch: React.Dispatch<ILogrecsActions>;
}

// export class C1_current_user {
//
//     email:string='';
//     is_signed_in:boolean=false;
//
// }

export interface TGloabal_props {
    logrecs: Array<T1_logrec>;
    current_user: any; //C1_current_user;
    current_application: any;
}

export interface T1_logrec {
    id?: string;
    text?: string;
    completed?: boolean;
    is_active: boolean;
}
