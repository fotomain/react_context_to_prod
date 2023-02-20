import React, {useEffect, useState} from 'react';
import { createRoot } from 'react-dom/client';
import AppWorkPage from './AppWorkPage';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import {Globals_Provider} from "./context_globals_logrec/globals_context";
import {Database, Storage} from "@ionic/storage";

const container = document.getElementById('root');
const root = createRoot(container!);


const co1 = ()=>{

    return(
    // <React.StrictMode>

        <Globals_Provider>
            <App/>
        </Globals_Provider>

    // </React.StrictMode>
)
}

root.render(
    co1()
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
