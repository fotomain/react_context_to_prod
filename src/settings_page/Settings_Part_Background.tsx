

// TODO
// TODO
//  initial checked from state = background_media_image_show
// TODO
//  initial checked from state = background_media_video_show


import * as React from 'react';
import {Globals_context} from "../context_globals_logrec/globals_context";
import {Alert, Box, Button, Card, FormLabel, Radio, RadioGroup} from "@mui/material";

import { Database, Storage } from '@ionic/storage';
import {useEffect, useState} from "react";

import { FileError, FileRejection, useDropzone } from 'react-dropzone';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import DropFilesZone from "./DropFilesZone";
import {log} from "util";


const Settings_Part_Background: React.FC = () => {

    const debub_mode = true
    // const debub_mode = false

    const debub_border = (props?:any) => {

        if(null==props && undefined!=props){
            console.log("=== props debub_border", props)
            return {}
        }

        if(undefined==props){
        if(debub_mode){
            return {border:"1px solid", borderColor:'pink',}
        }
        }

        if(typeof props == 'string'){
            console.log("=== typeof props == 'string' ",props)
            if(debub_mode){
                return {border:"3px solid", borderColor:`${props}`,}
            }
        }

        return {}

    }

    const { global_props, global_dispatch } = React.useContext(Globals_context);

    const [file2_loading_video, set_file2_loading_video] = useState(false);
    const [file_data_video, set_file_data_video] = useState(global_props.current_application.background.background_data_video_value);


    const [state, setState] = React.useState({
        header1:'',
        file1:'',
        'background_data_color_value_source_type':  global_props.current_application.background_data_color_value_source_type,
        //TODO FROM GLOBALS
        display_box_image:false,
        display_box_video:false,
        display_box_color:false,
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


    const [checked, setChecked] = React.useState([
        state.display_box_image,
        state.display_box_video ,
        state.display_box_color
    ]);

    const handleChange_parent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, event.target.checked, event.target.checked]);

        setState({
            ...state,
            // react checkbox set checked trow onclick
            display_box_image:event.target.checked,
            display_box_video:event.target.checked,
        })
        const tdata = global_props.current_application
        tdata.background.background_media_image_show = event.target.checked
        tdata.background.background_media_video_show = event.target.checked
        console.log("=== SETTER_APPLICATION start ",tdata)
        global_dispatch({
            type: 'SETTER_APPLICATION',
            global_new_data:{current_application:tdata},
        })


    };

    const handleChange_Color = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([checked[0], checked[1], event.target.checked]);
        setState({
            ...state,
            display_box_color:event.target.checked,
        })

        const tdata = global_props.current_application
        tdata.background.background_color_show = event.target.checked
        console.log("=== SETTER_APPLICATION start ",tdata)
        global_dispatch({
            type: 'SETTER_APPLICATION',
            global_new_data:{current_application:tdata},
        })


    };


    const handleChange_Image = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, checked[1], checked[2]]);
        setState({
            ...state,
            display_box_image:event.target.checked,
        })
        const tdata = global_props.current_application
        tdata.background.background_media_image_show = event.target.checked
        console.log("=== SETTER_APPLICATION start ",tdata)
        global_dispatch({
            type: 'SETTER_APPLICATION',
            global_new_data:{current_application:tdata},
        })

    };

    const handleChange_Video = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([checked[0], event.target.checked,checked[2]]);
        setState({
            ...state,
            display_box_video:event.target.checked,
        })

        const tdata = global_props.current_application
        tdata.background.background_media_video_show = event.target.checked
        console.log("=== SETTER_APPLICATION start ",tdata)
        global_dispatch({
            type: 'SETTER_APPLICATION',
            global_new_data:{current_application:tdata},
        })


    };


    const Checkbox_All = () => {
        return(
            <FormControlLabel
                label="use all options"
                control={
                    <Checkbox
                        checked={checked[0] && checked[1]}
                        indeterminate={checked[0] !== checked[1]}
                        onChange={handleChange_parent}
                    />
                }
            />
        )
    }

    const Checkbox_Color = () => {
      return(
          <FormControlLabel
              name="check_color_option"
              label="color"
              control={<Checkbox checked={checked[2]} onChange={handleChange_Color} />}
          />
      )
    }


    const Checkbox_Image = () => {
      return(
          <FormControlLabel
              name="check_image_option"
              label="image"
              control={<Checkbox checked={checked[0]} onChange={handleChange_Image} />}
          />
      )
    }

    const Checkbox_Video = () => {
        return(
            <FormControlLabel
                name="check_video_option"
                label="video"
                control={<Checkbox checked={checked[1]} onChange={handleChange_Video} />}
            />
        )
    }



    const onDrop = (acceptedFiles:any) => {
        console.log("=== acceptedFiles ",acceptedFiles)
        getFile(acceptedFiles[0])
    };

    const { isDragActive, getRootProps, getInputProps } = useDropzone({
        onDrop,
        // accept: 'image/*',
        // accept:
            // [['image/*'], ['video/*'], ['.pdf']],
            // 'text/html': ['.html', '.htm'],
            //         {
            //             'image/*': ['.png','.jpeg','.jpg','.tif','.gif'],
            //         },
        // maxSize: 300 * 1024, // 300KB
        maxSize: 50000 * 1024, // 300KB
    });

    const No_Image_Button = () => {
        return (
            <Button
                variant="contained"
                onClick={()=>{

                }}
            >
                No Image
            </Button>
        )
    }
    const No_Video_Button = () => {
        return (
            <Button
                variant="contained"
                onClick={()=>{

                }}
            >
                No video
            </Button>
        )
    }


    const Upload_Image_Button = () => {
        return(
            <>

                    <Card variant='outlined' color="info" sx={{border: '1px dashed', borderRadius:'10%', borderColor: 'green', opacity:'0.8', padding:'35px'}}>
                    <Box style={{
                        zIndex:'99',
                        display:'flex',
                        flexDirection: 'column',
                        justifyContent:'center',
                        alignItems:"center",
                    }}>

                        <DropFilesZone onDrop={(first_file:any)=>{
                            console.log("=== ohDrop IMAGE  ")

                            const fileReader = new FileReader();
                            fileReader.readAsDataURL(first_file);
                            fileReader.onload = function (event:any) {
                                const file_data = event.target.result
                                console.log("=== base64 ",file_data)

                                if(file_data) {

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


                        }} />

                    <p>or press</p>

                            <input
                                color="primary"
                                accept="image/*"
                                type="file"
                                onChange={(e)=> {
                                    getFile(e)
                                }}
                                id="file1input"
                                style={{ zIndex:'99', display: 'none', }}
                            />


                    <label htmlFor="file1input">

                        <Button
                            component="span"
                            variant="contained"
                        >
                            Upload
                            <input
                                type="file"
                                hidden
                            />
                        </Button>
                    </label>

                    </Box>
                    </Card>

            </>

        )

    }

    const Upload_Video_Button = () => {
        return( <>
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
                    Upload
                    <input
                        type="file"
                        hidden
                    />
                </Button>
            </label>

        </> )
    }


    const Display_Video_Uploaded = () => {
        return(
            <Box sx={{ display: 'flex', flexDirection: 'row',  }}>

                        <video  id={'#video1'}

                                src={global_props.current_application.background.background_data_video_value}
                                autoPlay
                                loop

                                width="150"
                                // height="150"
                                controls
                        >
                            Your browser does not support the video tag.
                        </video>

            </Box>

        )
    }

    const Display_Image_Uploaded = () => {

        return(
            <Box sx={{ display: (checked[0])?'flex':'none', flexDirection: 'column',  }}>
                {(global_props.current_application.background.background_data_image_value.length==0)?''
                    :
                    <img
                        style={{
                            width:150,
                            // height:100
                        }}
                        // width={'100%'}
                        // height={'100px'}
                        src={global_props.current_application.background.background_data_image_value}
                    />}
            </Box>
        )
    }

    function onChange_left_right(event:any) {
        console.log("=== onChange_left_right")
        let t_ev_type = (event.target.value).trim()
        console.log(t_ev_type)
        if(t_ev_type=="gradient"){
            console.log('=== go left' )
            setState({...state, ['background_data_color_value_source_type']: 'still'})
        }
        else{
            console.log('=== go right' )
            setState({...state, ['background_data_color_value_source_type']: 'gradient'})
        }

        const tdata = global_props.current_application
        tdata.title.mode_position = t_ev_type
        global_dispatch({
            type: 'SETTER_APPLICATION',
            global_new_data:{current_application:tdata},
        })

    }


    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'row', ml: 3 }}>
                <h3>You can choose options for the background</h3>
            </Box>


            {/*=========== ROW CHECKBOXES */}
            <Box style={{border:"1px solid", borderColor:'blue'}}>
                <Checkbox_All />
                <Box sx={{ display: 'flex', flexDirection: 'row', ml: 3 }}>

                    <Checkbox_Color/>
                    <Checkbox_Image/>
                    <Checkbox_Video />

                </Box>
            </Box>

            {/*=========== ROW === COLOR === IMAGE === VIDEO  */}
            {/*<Box style={{border:"1px solid", borderColor:'blue'}}>*/}


                <Box sx={{
                    ...debub_border(null), ...{
                        display: 'flex', flexDirection: 'row',
                    }
                }}>

                    {/*=========== COL === COLOR ===  */}
                    <Box style={{
                        ...debub_border('green'),
                        flex:1,
                        zIndex:'99',
                        display:(state.display_box_color)?'flex':'none',
                        flexDirection:'row',
                        justifyContent:'start',
                        alignItems:'center',
                        padding:'10px',
                        gap:'10px',
                    }}>


                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group"
                                    onChange={onChange_left_right}


                                    value={state['background_data_color_value_source_type']}
                        >
                            <Box>
                            <FormLabel sx={{flexGrow:10, marginTop:'10px', marginRight:'7px'}} component="legend">color type</FormLabel>
                            </Box>
                            <Box>
                            <FormControlLabel

                                    labelPlacement="end" value="still"
                                              control={
                                                  <Radio
                                                      sx={{
                                                          '&, &.Mui-checked': {
                                                              color: 'primary',
                                                          },
                                                      }}
                                                  />}
                                              label="still"
                            />
                            <FormControlLabel

                                labelPlacement="end" value="gradient"
                                              control={
                                                  <Radio
                                                      sx={{
                                                          '&, &.Mui-checked': {
                                                              color: 'primary',
                                                          },
                                                      }}
                                                  />}

                                              label="gradient"
                            />
                            </Box>
                            {/*<FormControlLabel*/}
                            {/*    value="disabled"*/}
                            {/*    disabled*/}
                            {/*    control={<Radio />}*/}
                            {/*    label="other"/>*/}
                        </RadioGroup>

                    </Box>


                    {/*=========== COL === IMAGE ===  */}
                    <Box style={{
                        ...debub_border('green'),
                        flex:1,
                        zIndex:'99',
                        display:(state.display_box_image)?'flex':'none',
                        flexDirection:'column',
                        alignItems:'center',
                        padding:'10px',
                        gap:'10px',
                    }}>

                        {((global_props.current_application.background.background_data_image_value.length==0))
                            ?
                            <Upload_Image_Button/>
                            :
                            <No_Image_Button />
                        }


                        <Display_Image_Uploaded />
                    </Box>


                    {/*=========== COL === VIDEO ===  */}
                    <Box id={'video_wrapper'} sx={{
                        ...debub_border('red'),
                        flex:1,
                        display:(state.display_box_video)?'flex':'none',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'center',
                        padding:'10px',
                        gap:'10px',
                    }}>

                        {((global_props.current_application.background.background_data_video_value.length==0))
                            ?<Upload_Video_Button />
                            :<No_Video_Button />
                        }

                        <Box style={{ display: (global_props.current_application.background.background_data_video_value.length!=0)?'flex':'none', flexDirection: 'column',  }}>

                            <Display_Video_Uploaded />

                        </Box>
                    </Box> {/*video*/}

                </Box>



            {/*</Box>*/}
            <p>image {JSON.stringify(global_props.current_application.background.background_data_image_value.length)}</p>
            <p>video {JSON.stringify(global_props.current_application.background.background_data_video_value.length)}</p>
            <p>show  {JSON.stringify(global_props.current_application.background.background_media_video_show)}</p>
            <p>{JSON.stringify(checked)}</p>
        </>

    );
};

export default Settings_Part_Background;
