


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

    var data_background_video:any =  ''
        console.log("=== VVV global_props",global_props)
        if(
            "video"==global_props.current_application.background.background_media_type
            &&
            ''!=global_props.current_application.background.background_data_video_value
            // && file or url
        )
        {

            data_background_video=global_props.current_application.background.background_data_video_value
            // data_background_video='https://img.freepik.com/free-photo/feeling-free-woman-hilltop_23-2148150137.jpg?w=1380&t=st=1676388878~exp=1676389478~hmac=20c92bd22e051a2a714173e7ea37739adef6de1ba6380396498875e9f3035d41'
            console.log("=== data_background_video START",Date)

        }
        console.log("=== data_background_picture",data_background_picture)

    var data_background_picture:any =  ''
    data_background_picture =  require('./images_app/bkg3.jpg')
        console.log("=== 111 global_props",global_props)
        if(
            "image"==global_props.current_application.background.background_media_type
            &&
            ''!=global_props.current_application.background.background_data_image_value
            // && file or url
        )
        {

            console.log("=== 222 global_props",global_props)
            data_background_picture=global_props.current_application.background.background_data_image_value
            // data_background_picture='https://img.freepik.com/free-photo/feeling-free-woman-hilltop_23-2148150137.jpg?w=1380&t=st=1676388878~exp=1676389478~hmac=20c92bd22e051a2a714173e7ea37739adef6de1ba6380396498875e9f3035d41'


        }
        console.log("=== data_background_picture",data_background_picture)



    return (

        <IonApp className={'div_full_screen'}

                style={{
                    zIndex:5,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover", //!!! NO VISUAL DISTORTINOS
                    // backgroundSize:'100%  100%',
                    backgroundPosition: "center",
                    // no-repeat center / cover

                    backgroundImage: 'url(' + data_background_picture + ')' ,

                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'space-between',
                    alignItems:'top',

                    paddingLeft:'5%',
                    paddingRight:'5%',

                    }}
            >

            {/*https://artlist.io/stock-footage/clip/pyramids-egypt-ancient-giza/617748*/}

            {(!data_background_video)?'no video...':
            <video  id={'#video0'}
                    style={{
                        zIndex:10, opacity:'0.3',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        height:'100%',
                        width:'100%',
                    }}
                    autoPlay
                    loop
                    src={data_background_video}
                    // width="320" height="240" controls
                    // width="100%" height="100%" controls
            >
                Your browser does not support the video tag.
            </video>
            }


            <AppWorkPage/>
        </IonApp>

    )
};

export default App;


