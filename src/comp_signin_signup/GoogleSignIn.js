
import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import * as React from 'react';
import {Context} from "../context_globals_logrec/context";

import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import {useEffect} from "react";
import {Button} from "@mui/material";

const GoogleSignIn = () => {

    const { global_props, global_dispatch } = React.useContext(Context);

    const [state, setState] = React.useState({

    });

    useEffect(() => {

        console.log('=== rr1 ')
        const res = GoogleAuth.initialize({
            clientId: '685545318733-5pd990gpbdvi6s45114nu3db5dcq3j59.apps.googleusercontent.com',
            scopes: ['profile', 'email'],
            grantOfflineAccess: true,
        })

        console.log('=== rr2',res)

        return () => {
        };
    }, []);


    const signIn = async () => {

        const result = await GoogleAuth.signIn(null);
        console.info('result', result);
        if (result) {
            console.log("=== result",result)
            alert(JSON.stringify(result))
        }

    }

    const signOut = async () => {

        const res = await GoogleAuth.signOut()
        console.log("=== signOut", res)

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
        <br/>
          <Button variant={'contained'}
                  onClick={()=>{
                      signOut()
                  }}
          >Sign Out</Button>
    </div>
  );
};

export default GoogleSignIn;
