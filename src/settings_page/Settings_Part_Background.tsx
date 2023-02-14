



import * as React from 'react';
import {Context} from "../context_globals_logrec/context";
import {Box} from "@mui/material";

import { Database, Storage } from '@ionic/storage';
import {useEffect, useState} from "react";

const Settings_Part_Background: React.FC = () => {

    const { global_props, global_dispatch } = React.useContext(Context);

    const [file2_loading_video, set_file2_loading_video] = useState(false);
    const [file_data_video, set_file_data_video] = useState('');


    const [state, setState] = React.useState({
        header1:'',
        file1:'',
        image_base64:'',
    });

    const getFileHeader = (file:any) => {
        const headerReader = new FileReader();
        headerReader.onloadend = function (e:any) {
            if(e.target && e.target.result) {
                const arr = new Uint8Array(e.target.result).subarray(0, 4);
                let header = "";
                for (let i = 0; i < arr.length; i++) {
                    header += arr[i].toString(16);
                }
                setState({
                    ...state,
                    'header1': header
                });
                const ft = fileType(header)
                console.log('=== header ', header)
                console.log("=== ft ",ft)
            }
        };
        headerReader.onerror = function (error) {
            console.log('=== Error headerReader: ', error);
        };
        const hh = headerReader.readAsArrayBuffer(file);
        // console.log(window.btoa(unescape(encodeURIComponent(file))))

        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = function (event:any) {
            const file_data = event.target.result
            console.log("=== base64 ",file_data)

            if(file_data) {
                setState({...state, ['image_base64']: file_data})

                let image = document.createElement('img');
                image.src = file_data;

                const tdata = global_props.current_application
                tdata.background.background_media_type = "image"
                tdata.background.background_data_image_value_source_type = 'file'
                tdata.background.background_data_image_value = file_data
                console.log("=== tdata",tdata)
                global_dispatch({
                    type: 'SETTER_APPLICATION',
                    global_new_data:{current_application:tdata},
                })


            }
        };
        fileReader.onerror = function (error) {
            console.log('=== Error fileReader: ', error);
        };

    };

    const getFile = (e:any) => {
        if(e.target && e.target.files) {
            const file1 = e.target.files[0];
            setState({...state, "file1": file1});
            getFileHeader(file1);
        }
    };

    const fileType = (value:any) => {
        switch (value) {
            case "89504e47":
                return "image/png";
            case "47494638":
                return "image/gif";
            case "ffd8ffe0":
            case "ffd8ffe1":
            case "ffd8ffe2":
            case "ffd8ffe3":
            case "ffd8ffe8":
                return "image/jpeg";
            case "25504446":
                return "pdf";
            default:
                return "formato de archivo no reconocido";
        }
    };


    return (

        <Box>
        <Box>

            {/*codesandbox image from base65*/}

            <input type="file" id="archivo" name="archivo" onChange={getFile} />

            {(!state.image_base64)?'':<img style={{width:400, height:400}} width={'100%'} height={'100%'} src={state.image_base64}  />}


        </Box>

        <Box>

            <input type="file" id="archivo" name="archivo" onChange={(event:any)=>{
                let file = event.target.files[0];

                // let blobURL = URL.createObjectURL(file);
                // console.log("=== blobURL",blobURL)

                set_file2_loading_video(true)
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.onload = function (event:any) {
                    const file_data = event.target.result
                    console.log("=== base64 ",file_data)



                    // const el = document.getElementById("#video1") as HTMLVideoElement
                    set_file2_loading_video(false)
                    set_file_data_video(file_data)
                    // if (el) el.src = file_data;

                    console.log("=== src = file_data ")

                    // const tdata = global_props.current_application
                    // tdata.background.background_media_type = "video"
                    // tdata.background.background_data_video_value_source_type = 'file'
                    // tdata.background.background_data_video_value = file_data
                    // console.log("=== tdata",tdata)
                    // console.log("=== SETTER_APPLICATION start ",tdata)
                    // global_dispatch({
                    //     type: 'SETTER_APPLICATION',
                    //     global_new_data:{current_application:tdata},
                    // })


                }


            }} />


            {(0==file_data_video.length)?'no video selected':
            <video  id={'#video1'}

                    src={file_data_video}
                    autoPlay
                    width="320" height="240" controls
            >
                Your browser does not support the video tag.
            </video>
            }

        </Box>
        </Box>

  );
};

export default Settings_Part_Background;


