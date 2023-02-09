import * as React from "react";
import userReducer from "./reducer";
import {C1_current_user, TGloabal_context} from "./globals_types";
const initial_todos = [
    { id: "1", text: "First", completed: false, is_active:false },
    { id: "2", text: "Second", completed: true, is_active:false },
];

const initial_user = new C1_current_user()
initial_user.email = 'aa@bb.cc'
initial_user.is_signed_in = false


export const Context = React.createContext({} as TGloabal_context);

interface IProps {
    children?: React.ReactChild;
}

export function Provider(props: IProps) {
    const [global_props, global_dispatch] = React.useReducer(userReducer, {
        todos:initial_todos,
        current_user:initial_user
    });

    const value = { global_props, global_dispatch };
    return <Context.Provider value={value}>{props.children}</Context.Provider>;
}
