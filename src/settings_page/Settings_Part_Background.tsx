
import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import * as React from 'react';
import {Context} from "../context_globals_logrec/context";
import {Box} from "@mui/material";



const Settings_Part_Background: React.FC = () => {

    const { global_props, global_dispatch } = React.useContext(Context);

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
            console.log("=== base64 ",event.target.result)

            if(fileReader.result) {
                setState({...state, ['image_base64']: event.target.result})

                const image_url = event.target.result;
                let image = document.createElement('img');
                image.src = image_url;

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

            {/*codesandbox image from base65*/}

            <input type="file" id="archivo" name="archivo" onChange={getFile} />

            {(!state.image_base64)?'':<img style={{width:400, height:400}} width={'100%'} height={'100%'} src={state.image_base64}  />}

    {/*        <img src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA*/}
    {/*AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO*/}
    {/*    9TXL0Y4OHwAAAABJRU5ErkJggg==" alt="Red dot" />*/}

        </Box>

  );
};

export default Settings_Part_Background;