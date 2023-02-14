


// git remote add origin https://github.com/fotomain/vit_ionic_play1.git
// ionic build
// ionic build--prod; ionic cap copy --prod; ionic serve
// npm i swiper
//=== DOC COOL https://thetechbee.medium.com/creating-a-slide-using-swiper-js-in-ionic-react-in-5-steps-2022-mobile-app-development-for-52f4cb80d2ce

// npm install --save-dev @types/styled-components-react-native

import React, {useEffect, useState} from 'react';


import {IonApp, IonContent, IonRouterOutlet, setupIonicReact} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import ViewMessage from './pages/ViewMessage';
// import { Player } from "video-react";
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';


/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Test_Globals from "./z_context_globals/Test_Globals";

//start_globals_from_logrec

import {Context, Globals_Provider} from "./context_globals_logrec/context";
import LogrecList from "./context_globals_logrec/LogrecList";
import LogrecForm from "./context_globals_logrec/LogrecForm";

import './App.css'
import Settings from "./settings_page/Settings";
import AppWorkPage from "./AppWorkPage";

setupIonicReact();


const App: React.FC = () => {

    const { global_props,global_dispatch } = React.useContext(Context);

    var string_to_data_background:any =  ''
    string_to_data_background =  require('./images_app/bkg3.jpg')
    console.log("=== 111 global_props",global_props)
    if(
        "image"==global_props.current_application.background.background_type
        &&
        ''!=global_props.current_application.background.background_data_image
    )
    {

        console.log("=== 222 global_props",global_props)
        string_to_data_background='"'+global_props.current_application.background.background_data_image+'"'


    }
    console.log("=== string_to_data_background",string_to_data_background)
    useEffect(() => {
        return () => {
            // runGet
            const el = document.getElementById('id1')
            if(el){
                // el.video.src=global_props.current_application.background.background_data_image
            }
        };
    }, [global_props.current_application.background.background_data_image]);


    return (

        <IonApp className={'div_full_screen'}

                style={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover", //!!! NO VISUAL DISTORTINOS
                    // backgroundSize:'100%  100%',
                    backgroundPosition: "center",
                    // no-repeat center / cover

                    backgroundImage: 'url(' + string_to_data_background + ')' ,

                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'space-between',
                    alignItems:'top',

                    paddingLeft:'5%',
                    paddingRight:'5%',

                    }}
            >

            <AppWorkPage/>
        </IonApp>

    )
};

export default App;


