import * as React from "react";
import userReducer from "./reducer";
import {TGloabal_context} from "./globals_types";
import {initial_setings} from "./globals_initial_setings";
const initial_logrecs = [
    { id: "1", text: "First", completed: false, is_active:false },
    { id: "2", text: "Second", completed: true, is_active:false },
];

// const initial_user = new C1_current_user()
// initial_user.email = 'aa@bb.cc'
// initial_user.is_signed_in = false

let initial_user = {email:'aa'}
initial_user.email  = 'bb';

export const Context = React.createContext({} as TGloabal_context);

interface IProps {
    children?: React.ReactChild;
}

export function Globals_Provider(props: IProps) {
    const [global_props, global_dispatch] = React.useReducer(userReducer, {
        logrecs:initial_logrecs,
        // current_user:initial_user
        current_user:initial_setings.current_user
    });

    const value = { global_props, global_dispatch };
    return <Context.Provider value={value}>{props.children}</Context.Provider>;
}
