import {Dropzone} from "react-dropzone/typings/tests/hook";

const UploadFiles = () =>{
    return (
        <>
            <Dropzone className="custom-wrapper" accept={`image/*`} />
        </>
    );
}

export default UploadFiles
