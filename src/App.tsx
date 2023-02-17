


// git remote add origin https://github.com/fotomain/vit_ionic_play1.git
// ionic build
// ionic build --prod; ionic cap copy --prod; ionic serve
// npm i swiper
//=== DOC COOL https://thetechbee.medium.com/creating-a-slide-using-swiper-js-in-ionic-react-in-5-steps-2022-mobile-app-development-for-52f4cb80d2ce

// ionic cap add android; ionic build --prod; ionic cap copy --prod

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

import DropFilesZone from "./settings_page/DropFilesZone";
import GoogleSignIn from "./comp_signin_signup/GoogleSignIn";

setupIonicReact();


const App: React.FC = () => {

    const { global_props,global_dispatch } = React.useContext(Context);

    var data_background_color:any =  ''

    var data_background_video:any =  ''
        console.log("=== VVV global_props",global_props)
        if(
            global_props.current_application.background.background_media_video_show
            &&
            ''!=global_props.current_application.background.background_data_video_value
            // && file or url
        )
        {

            data_background_video=global_props.current_application.background.background_data_video_value
            // data_background_video='https://img.freepik.com/free-photo/feeling-free-woman-hilltop_23-2148150137.jpg?w=1380&t=st=1676388878~exp=1676389478~hmac=20c92bd22e051a2a714173e7ea37739adef6de1ba6380396498875e9f3035d41'
            // console.log("=== data_background_video START",Date)

            // // data:video/mp4;base64,
            // const b64toBlob = (b64Data:any, contentType='', sliceSize=512) => {
            //     const byteCharacters = window.atob(b64Data);
            //     const byteArrays = [];
            //
            //     for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            //         const slice = byteCharacters.slice(offset, offset + sliceSize);
            //
            //         const byteNumbers = new Array(slice.length);
            //         for (let i = 0; i < slice.length; i++) {
            //             byteNumbers[i] = slice.charCodeAt(i);
            //         }
            //
            //         const byteArray = new Uint8Array(byteNumbers);
            //         byteArrays.push(byteArray);
            //     }
            //
            //     const blob = new Blob(byteArrays, {type: contentType});
            //     return blob;
            // }
            //
            //
            // const contentType = 'video/mp4';
            // const b64Data = data_background_video.replace('data:video/mp4;base64,','')
            //
            // const blob = b64toBlob(b64Data, contentType);
            //
            // // const blobUrl = URL.createObjectURL(blob);
            // // const img = document.createElement('video');
            // // img.src = blobUrl;
            // // document.body.appendChild(img);
            // data_background_video = blob
            // // console.log("=== data_background_video BLOB",data_background_video)
            //

            console.log("=== data_background_video BLOB",data_background_video)

        }


    var data_background_image:any =  ''

        console.log("=== 111 global_props",global_props)
        if(
            global_props.current_application.background.background_media_image_show
            &&
            ''!=global_props.current_application.background.background_data_image_value
            // && file or url
        )
        {

            console.log("=== 222 global_props",global_props)
            data_background_image=global_props.current_application.background.background_data_image_value
            // data_background_picture='https://img.freepik.com/free-photo/feeling-free-woman-hilltop_23-2148150137.jpg?w=1380&t=st=1676388878~exp=1676389478~hmac=20c92bd22e051a2a714173e7ea37739adef6de1ba6380396498875e9f3035d41'

        }
        else
        {
            // data_background_image =  require('./images_app/bkg3.jpg')
        }
        console.log("=== data_background_picture",data_background_image)



    return (

        <div className={'div_full_screen'}

                style={{

                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'space-between',
                    alignItems:'top',

                    paddingLeft:'15%',
                    paddingRight:'15%',

                    }}
            >

            {/*https://artlist.io/stock-footage/clip/pyramids-egypt-ancient-giza/617748*/}

            {/*=== !!! state IMPORTANT do it for static URL also*/}


            {/*============ CCCCCCCCCCC  ================*/}
            <div
                style={{
                    zIndex:6,

                    background: 'linear-gradient(85deg, rgba(34,193,195,1) 0%, rgba(179,191,111,1) 37%, rgba(177,116,190,1) 80%, rgba(253,45,219,1) 99%)',
                    // backgroundColor:'green',
                    position: 'absolute',
                    opacity:'0.5',
                    top: '0',
                    left: '0',
                    height:'100%',
                    width:'100%',

                }}
            ></div>



            {(!data_background_image)?'no image...':
                <div
                    style={{
                        zIndex:5,
                        // opacity:'0.3',
                        backgroundImage: 'url(' + data_background_image + ')' ,
                        backgroundRepeat: "no-repeat",

                        backgroundSize: "cover", //!!! NO VISUAL DISTORTINOS
                        backgroundPosition: "center",

                        // objectFit: 'cover',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        height:'100%',
                        width:'100%',

                    }}
                ></div>
            }

            {(!data_background_video)?'no video...':
                <video  id={'#video0'}
                        style={{
                            zIndex:10,
                            // opacity:'0.3',
                            objectFit: 'cover',
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            height:'100%',
                            width:'100%',
                        }}

                        autoPlay={true}

                        loop
                        // src={'https://joy1.videvo.net/videvo_files/video/free/video0467/large_watermarked/_import_615435000f6eb2.81789495_preview.mp4'}
                    src={data_background_video}
                >
                    <source src={data_background_video}  />
                    Your browser does not support the video tag.
                </video>
            }


            {/*{(false && !data_background_video)?'no video...':*/}
            {/*<video  id={'#video0'}*/}
            {/*        style={{*/}
            {/*            zIndex:10, opacity:'0.3',*/}
            {/*            objectFit: 'cover',*/}
            {/*            position: 'absolute',*/}
            {/*            top: '0',*/}
            {/*            left: '0',*/}
            {/*            height:'100%',*/}
            {/*            width:'100%',*/}
            {/*        }}*/}

            {/*        autoPlay={true}*/}

            {/*        loop*/}
            {/*        src={'https://joy1.videvo.net/videvo_files/video/free/video0467/large_watermarked/_import_615435000f6eb2.81789495_preview.mp4'}*/}
            {/*        // src={data_background_video}*/}
            {/*        // width="320" height="240" controls*/}
            {/*        // width="100%" height="100%" controls*/}
            {/*>*/}
            {/*    <source src={'https://joy1.videvo.net/videvo_files/video/free/video0467/large_watermarked/_import_615435000f6eb2.81789495_preview.mp4'} type="video/mp4" />*/}
            {/*    Your browser does not support the video tag.*/}
            {/*</video>*/}
            {/*}*/}

            <GoogleSignIn />

            <DropFilesZone/>

            <AppWorkPage/>
        </div>

    )
};

export default App;


