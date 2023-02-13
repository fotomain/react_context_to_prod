

import * as React from "react";
import userReducer from "./reducer";
import {TGloabal_context} from "./globals_types";
import {initial_setings} from "./globals_initial_setings";
import {useEffect, useState} from "react";
import {Database, Storage} from "@ionic/storage";
const initial_logrecs = [
    { id: "1", text: "First", completed: false, is_active:false },
    { id: "2", text: "Second", completed: true, is_active:false },
];

// const initial_user = new C1_current_user()
// initial_user.email = 'aa@bb.cc'
// initial_user.is_signed_in = false

// let initial_user = {email:'aa'}
// initial_user.email  = 'bb';

export const Context = React.createContext({} as TGloabal_context);

interface IProps {
    children?: React.ReactChild;

}

export function Globals_Provider(props: IProps) {

    const [db, setDb] = useState<Database | null>(null);
    console.log('=== init db ')

    const [global_props, global_dispatch] = React.useReducer(userReducer, {
        db:db,
        logrecs:initial_logrecs,
        // current_user:initial_user
        current_user:initial_setings.current_user,
        current_application:initial_setings.current_application
    });

        useEffect(() => {
        async function initDb() {
            const store = new Storage();

            const db = await store.create();

            setDb(db);
            global_dispatch({type:'DB_LOCAL_SETDB','global_new_data':db})
        }

        initDb();

    }, []);


    const value = { global_props, global_dispatch };
    return <Context.Provider value={value}>{props.children}</Context.Provider>;
}
