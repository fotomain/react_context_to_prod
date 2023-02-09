import * as React from "react";
import userReducer from "./reducer";
import { TGloabal_context } from "./globals_types";
const todos = [
    { id: "1", text: "First", completed: false, is_active:false },
    { id: "2", text: "Second", completed: true, is_active:false },
];

export const Context = React.createContext({} as TGloabal_context);

interface IProps {
    children?: React.ReactChild;
}

export function Provider(props: IProps) {
    const [global_props, global_dispatch] = React.useReducer(userReducer, { todos });

    const value = { global_props, global_dispatch };
    return <Context.Provider value={value}>{props.children}</Context.Provider>;
}
