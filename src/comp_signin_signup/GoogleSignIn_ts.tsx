
import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import * as React from 'react';
import {Globals_context} from "../context_globals_logrec/globals_context";

import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import {useEffect} from "react";
import {Button} from "@mui/material";
//============ HOME
const GoogleSignIn: React.FC = () => {

    const { global_props, global_dispatch } = React.useContext(Globals_context);

    const [state, setState] = React.useState({

    });

    useEffect(() => {
        return () => {
            const res = GoogleAuth.initialize({
                clientId: '47192713780-k5e4brld4r7oplndec5fi5kcdra765s7.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
                grantOfflineAccess: true,
            })
            console.log('=== res',res)
        };
    }, []);


    const signIn = async () => {

        const result = await GoogleAuth.signIn();
        console.info('result', result);
        if (result) {
            console.log("=== result",result)
            alert(JSON.stringify(result))
        }

    }

    const signOut = async () => {

        await GoogleAuth.signOut()

        // await GoogleAuth.signOut().then(r=>{
        //     console.log(r)});

    }

    return (

    <div style={{zIndex:99}}>
          <Button variant={'contained'}
                  onClick={()=>{
                      signIn()
                  }}
          >Sign In</Button>
          <Button variant={'contained'}
                  onClick={()=>{
                      signOut()
                  }}
          >Sign Out</Button>
    </div>
  );
};

export default GoogleSignIn;
