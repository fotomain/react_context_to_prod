import * as React from "react";
import userReducer from "./reducer";
import { ITodosContext } from "./types";
const todos = [
    { id: "1", text: "First", completed: false },
    { id: "2", text: "Second", completed: true }
];

export const Context = React.createContext({} as ITodosContext);

interface IProps {
    children?: React.ReactChild;
}

export function Provider(props: IProps) {
    const [state, dispatch] = React.useReducer(userReducer, { todos });

    const value = { state, dispatch };
    return <Context.Provider value={value}>{props.children}</Context.Provider>;
}
