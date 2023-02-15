



import * as React from 'react';
import {Context} from "../context_globals_logrec/context";
import {Box, Button} from "@mui/material";

import { Database, Storage } from '@ionic/storage';
import {useEffect, useState} from "react";

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


const Settings_Part_Background: React.FC = () => {

    const { global_props, global_dispatch } = React.useContext(Context);

    const [file2_loading_video, set_file2_loading_video] = useState(false);
    const [file_data_video, set_file_data_video] = useState('');


    const [state, setState] = React.useState({
        header1:'',
        file1:'',
        image_base64:'',
        display_box_image:false,
        display_box_video:false,
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
                tdata.background.background_media_image_show = true
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
        console.log("=== getFile ",e)
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


    const [checked, setChecked] = React.useState([state.display_box_image, state.display_box_video]);

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, event.target.checked]);
        setState({
            ...state,
            display_box_image:event.target.checked,
            display_box_video:event.target.checked,
        })
    };

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, checked[1]]);
        setState({
            ...state,
            display_box_image:event.target.checked,
            display_box_video:checked[1],
        })
    };

    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([checked[0], event.target.checked]);
        setState({
            ...state,
            display_box_image:checked[0],
            display_box_video:event.target.checked,
        })
    };


    return (

    <Box>

        <Box>
            <p>You can choose options for the background</p>
            <FormControlLabel
                label="use all options"
                control={
                    <Checkbox
                        checked={checked[0] && checked[1]}
                        indeterminate={checked[0] !== checked[1]}
                        onChange={handleChange1}
                    />
                }
            />

            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                <FormControlLabel
                    label="image"
                    control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
                />
                <FormControlLabel
                    label="video"
                    control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
                />
            </Box>

            {/*=== IIIIIIIIIIIII*/}
            <Box sx={{ display:(state.display_box_image)?'block':'none' }}>

                {/*codesandbox image from base65*/}

                {/*<input style={{display: 'none'}} type="file" id="file1input" onChange={(e)=> {*/}
                {/*    getFile(e)*/}
                {/*}} />*/}

                <input
                    color="primary"
                    accept="image/*"
                    type="file"
                    onChange={(e)=> {
                        getFile(e)
                    }}
                    id="file1input"
                    style={{ display: 'none', }}
                />

                <label htmlFor="file1input">
                    <Button
                        component="span"
                        variant="contained"
                    >
                        Upload image
                        <input
                            type="file"
                            hidden
                        />
                    </Button>
                </label>

                {(!state.image_base64)?'':<img style={{width:400, height:400}} width={'100%'} height={'100%'} src={state.image_base64}  />}


            </Box>

            <Box sx={{ display:(state.display_box_video)?'block':'none' }}>



            <input
                style={{display: 'none'}}
                // https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept
                accept="video/mp4,video/x-m4v"
                type="file"
                id="file2input"

                onChange={(event:any)=>{
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

                    const tdata = global_props.current_application
                    tdata.background.background_media_video_show = true
                    tdata.background.background_data_video_value_source_type = 'file'
                    tdata.background.background_data_video_value = file_data
                    console.log("=== tdata",tdata)
                    console.log("=== SETTER_APPLICATION start ",tdata)
                    global_dispatch({
                        type: 'SETTER_APPLICATION',
                        global_new_data:{current_application:tdata},
                    })


                }


            }} />


                <label htmlFor="file2input">
                    <Button
                        component="span"
                        variant="contained"
                    >
                        Upload video
                        <input
                            type="file"
                            hidden
                        />
                    </Button>
                </label>


                {(0==file_data_video.length)?'no video selected':
                    <video  id={'#video1'}

                            src={file_data_video}
                            autoPlay
                            loop

                            width="150" height="150" controls
                    >
                        Your browser does not support the video tag.
                    </video>
                }

            </Box>



        </Box>
        </Box>

  );
};

export default Settings_Part_Background;


