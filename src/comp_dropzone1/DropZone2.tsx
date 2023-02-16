
import React, { useState, useEffect } from "react";

import styled, { css } from "styled-components";

import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'


const Dropzone2 = (props:any) => {
    const getUploadParams = ( meta:any ) =>
    { return { url: 'https://httpbin.org/post' } }

    // called every time a file's `status` changes
    const handleChangeStatus = ( meta:any, file:any , status:any) => { console.log(status, meta, file) }

    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files:any) => { console.log(files.map((f:any) => f.meta)) }

    return (
        <>
            {/*<Dropzone*/}
            {/*getUploadParams={getUploadParams}*/}
            {/*onChangeStatus={handleChangeStatus}*/}
            {/*onSubmit={handleSubmit}*/}
            {/*// accept="image/*,audio/*,video/*"*/}
            {/*/>*/}
        </>
    );
};

export default Dropzone2;
