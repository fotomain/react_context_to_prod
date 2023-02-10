


// git remote add origin https://github.com/fotomain/vit_ionic_play1.git
// ionic build
// ionic build--prod; ionic cap copy --prod; ionic serve
// npm i swiper
//=== DOC COOL https://thetechbee.medium.com/creating-a-slide-using-swiper-js-in-ionic-react-in-5-steps-2022-mobile-app-development-for-52f4cb80d2ce

// npm install --save-dev @types/styled-components-react-native

import React, {useEffect} from 'react';


import {IonApp, IonContent, IonRouterOutlet, setupIonicReact} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import ViewMessage from './pages/ViewMessage';

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

import { Globals_Provider } from "./context_globals_logrec/context";
import LogrecList from "./context_globals_logrec/LogrecList";
import LogrecForm from "./context_globals_logrec/LogrecForm";

import './App.css'
import Settings from "./settings_page/Settings";

setupIonicReact();

const style1 = { "--background": 'url(' + require('./images_app/bkg3.jpg') + ')' } as React.CSSProperties;

// js set :root var with querySelector
// document.documentElement.style.setProperty(
//     'background',
//     'url(' + require('./images_app/bkg3.jpg') + ')');
//
// document.documentElement.style.setProperty(
//     'background-size',
//     'cover');





// const root = document.querySelector(':root');
// if(root) {
//     root.style.setProperty('--background', 'blue');
// }

const App: React.FC = () => {

    useEffect(() => {

        // const root1 = document.getElementById('root')
        // console.log("=== root1 1",root1)
        // root1?.style.setProperty('color', 'blue')
        // if(root1) {
        //     console.log("=== root1 2")
        //     root1.style.setProperty('background', 'blue');
        // }

        const root2 = document.getElementById('toot');
        if(root2){
            console.log(root2)
            // root2.style.setProperty('--background', 'blue')
            root2.style.setProperty('--background', 'url(' + require('./images_app/bkg3.jpg') + ') no-repeat center / cover ')
            // root.style.setProperty('--background', 'blue');
        }

        return () => {

        };
    }, [ ]);


    return (

            <IonApp>
                {/*<div className="App111"*/}

                {/*     style={{*/}
                {/*         backgroundRepeat: "no-repeat",*/}
                {/*         // backgroundImage: 'url(' + bkg_app + ')'*/}
                {/*         // no-repeat center / cover*/}
                {/*         backgroundPosition:'center',*/}
                {/*         background:'center',*/}
                {/*         // backgroundSize:'100% 100%',*/}
                {/*         backgroundSize:'cover',*/}
                {/*         backgroundImage: 'url(' + require('./images_app/bkg3.jpg') + ') ',*/}

                {/*         display:'flex',*/}
                {/*         flexDirection:'column',*/}
                {/*         justifyContent:'space-between',*/}
                {/*         alignItems:'top',*/}
                {/*     }}*/}
                {/*>*/}

                <IonContent fullscreen id={'toot'}


                    // style={{
                    //     "--background-repeat": "no-repeat",
                    //     "--background-position": "center",
                    //     // backgroundRepeat: "no-repeat",
                    //     // backgroundImage: 'url(' + bkg_app + ')'
                    //     "background-size":'100% 100%',
                    //     // backgroundImage: 'url(' + require('./images_app/bkg3.jpg') + ')',
                    //     "--background": 'url(' + require('./images_app/bkg3.jpg') + ')',
                    //
                    //     display:'flex',
                    //     flexDirection:'column',
                    //     justifyContent:'space-between',
                    //     alignItems:'top',
                    //     }}

                >


                    <Globals_Provider>
                        <div className="App">
                            <LogrecForm/>
                            <LogrecList/>
                            <div className="rules">
                                <p>Double click - complete log </p>
                                <p>X - delete log</p>
                            </div>
                        </div>
                    </Globals_Provider>


                    {/*<LogrecProvider>*/}
                    {/*    <main className='App'>*/}
                    {/*        <h1>My Logrecs</h1>*/}
                    {/*        <AddLogrec />*/}
                    {/*        <Logrecs />*/}
                    {/*    </main>*/}
                    {/*</LogrecProvider>*/}

                    {/*<Home />*/}

                    {/*<App_To_Do/>*/}

                    {/*globals start*/}
                    {/*<Test_Globals/>*/}

                </IonContent>
                {/*</div>*/}

                <Settings />

            </IonApp>

    )
};

export default App;
