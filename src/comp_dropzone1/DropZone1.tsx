
import React, { useState, useEffect } from "react";
import Dropzone, { useDropzone, DropzoneProps } from "react-dropzone";
import styled, { css } from "styled-components";

interface dropZoneProps  extends DropzoneProps{
    files?: File[];
    onDrop?: (acceptedFiles: File[]) => void;
}

const Dropzone1 = (props: dropZoneProps) => {

    const Container = styled.div<Partial<dropZoneProps>>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: #eeeeee;
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;


//     ${({ isDragAccept }) =>
//     isDragAccept &&
//     css`
//       border-color: #00e676;
//     `}
// ${({ isDragActive }) =>
// isDragActive &&
// css`
//       border-color: #2196f3;
//     `}
// ${({ isDragReject }) =>
// isDragReject &&
// css`
//       border-color: #ff1744;
//     `}


const [files, setFiles] = useState<File[]>([]);

    const onDrop = (acceptedFiles: File[]) => {
        console.log("onDrop")
        setFiles(
            acceptedFiles.map(
                file => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            )
        );
    }
    const {
        isDragActive,
        getRootProps,
        getInputProps,
        isDragAccept,
        isDragReject,

    } = useDropzone({
    // const {...arr1} = useDropzone({
        // accept: {["image/*"]:['*.jpg']},
        onDrop: onDrop });

        // console.log("=== arr1")
        // console.log(arr1)
        // const isdragactive:any = arr1.isDragActive.toString()
        // const getRootProps:any = arr1.getRootProps
        // const getInputProps:any = arr1.getInputProps
        // const isdragaccept:any = arr1.isDragAccept.toString()
        // const isdragreject:any = arr1.isDragReject.toString()


    const thumbs = files.map((file: any) => (
        <div key={file.name}>
            {/* <div style={thumbInner}> */}
            <img alt={file.name} src={file.preview} />
            {/* </div> */}
        </div>
    ));

    useEffect(
        () => () => {
            // Make sure to revoke the data uris to avoid memory leaks
            files.forEach((file: any) => URL.revokeObjectURL(file.preview));
        },
        [files]
    );

    return (
        <>
            <div id={'dddddd'}
                {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
                style={{
                    height: "100vh",
                    width: "100vh",
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px',
                    borderWidth: '2px',
                    borderRadius: ' ',
                    borderColor: '#eeeeee',
                    borderStyle: 'dashed',
                    backgroundColor: '#fafafa',
                    color: '#bdbdbd',
                    outline: 'none',
                    transition: 'border 0.24s ease-in-out',

                }}
            >
                    <input {...getRootProps()} />
            </div>
            <p>Drag 'n' drop some files here, or click to select files</p>
            {thumbs}
        </>
    );
};

export default Dropzone1;
