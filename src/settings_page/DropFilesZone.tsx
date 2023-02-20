

import React from 'react'
import classNames from 'classnames'
import {Alert} from "@mui/material";
import {log} from "util";

interface DropZoneProps {
    onDragStateChange?: (isDragActive: boolean) => void
    onDrag?: () => void
    onDragIn?: () => void
    onDragOut?: () => void
    onDrop?: () => void
    onFilesDrop?: (files: File[]) => void
}

const DropZoneMemo = React.memo(

    (props: React.PropsWithChildren<DropZoneProps>) => {
        const {
            onDragStateChange,
            onFilesDrop,
            onDrag,
            onDragIn,
            onDragOut,
            onDrop,
        } = props

        // Create state to keep track when dropzone is active/non-active:
        const [isDragActive, setIsDragActive] = React.useState(false)
        // Prepare ref for dropzone element:
        const dropZoneRef = React.useRef<null | HTMLDivElement>(null)

        // Create helper method to map file list to array of files:
        const mapFileListToArray = (files: FileList) => {
            const array = []

            for (let i = 0; i < files.length; i++) {
                array.push(files.item(i))
            }

            return array
        }

        // Create handler for dragenter event:
        const handleDragIn = React.useCallback(

            (event:any) => {
                console.log("==  handleDragIn ")
                // + component_id,event)
                event.preventDefault()
                event.stopPropagation()
                onDragIn?.()

                if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
                    setIsDragActive(true)
                }
            },
            [onDragIn]
        )

        // Create handler for dragleave event:

        const handleDragOut = React.useCallback(
            (event:any) => {

                console.log("=== handleDragOut")

                event.preventDefault()
                event.stopPropagation()
                onDragOut?.()

                setIsDragActive(false)
            },
            [onDragOut]
        )

        // Create handler for dragover event:
        const handleDrag = React.useCallback(
            (event:any) => {
                event.preventDefault()
                event.stopPropagation()

                onDrag?.()
                if (!isDragActive) {
                    setIsDragActive(true)
                }
            },
            [isDragActive, onDrag]
        )

        // Create handler for drop event:
        const handleDrop = React.useCallback(
            (event:any) => {

                console.log("==  handleDrop ",event)

                event.preventDefault()
                event.stopPropagation()

                setIsDragActive(false)
                onDrop?.()

                if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
                    const files:any = mapFileListToArray(event.dataTransfer.files)
                    console.log("=== files ",files)
                    if(files) {
                        onFilesDrop?.(files)
                        event.dataTransfer.clearData()
                    }
                }
            },
            [onDrop, onFilesDrop]
        )

        // Obser active state and emit changes:
        React.useEffect(() => {
            onDragStateChange?.(isDragActive)
        }, [isDragActive])

        // Attach listeners to dropzone on mount:
        React.useEffect(() => {
            const tempZoneRef = dropZoneRef?.current
            if (tempZoneRef) {
                tempZoneRef.addEventListener('dragenter', handleDragIn)
                tempZoneRef.addEventListener('dragleave', handleDragOut)
                tempZoneRef.addEventListener('dragover', handleDrag)
                tempZoneRef.addEventListener('drop', handleDrop)
            }

            // Remove listeners from dropzone on unmount:
            return () => {
                tempZoneRef?.removeEventListener('dragenter', handleDragIn)
                tempZoneRef?.removeEventListener('dragleave', handleDragOut)
                tempZoneRef?.removeEventListener('dragover', handleDrag)
                tempZoneRef?.removeEventListener('drop', handleDrop)
            }
        }, [])

        // Render <div> with ref and children:
        return <div ref={dropZoneRef}>{props.children}</div>
    }
)


const DropFilesZone = React.memo((props:any) => {

// Create "active" state for dropzone:
    const [component_id, set_component_id] = React.useState(false)
    const [isDropActive, setIsDropActive] = React.useState(false)
    // Create state for dropped files:
    const [files, setFiles] = React.useState<File[]>([])

    // Create handler for dropzone's onDragStateChange:
    const onDragStateChange = React.useCallback((dragActive: boolean) => {
        setIsDropActive(dragActive)
    }, [])

    // Create handler for dropzone's onFilesDrop:
    const onFilesDrop = React.useCallback((files: File[]) => {
        setFiles(files)
        console.log("=== props ",props)
        if(props.onDrop && files && files[0]){
            props.onDrop( files[0] )
        }
    }, [])


    interface FileListProps {
        files: File[]
    }

    const FileList = React.memo(
        (props: React.PropsWithChildren<FileListProps>) => (
            <ul>
                {props.files.map((file: File) => (
                    <li key={`${file.name}_${file.lastModified}`}>
                        <span>{file.name}</span>{' '}
                        <span>({Math.round(file.size / 1000)}kb)</span>
                    </li>
                ))}
            </ul>
        )
    )

    return (
        <div id={props.id?props.id:'zone_'+(Math.random()*1000).toString()} style={{zIndex:99}}
            className={classNames('dropZoneWrapper', {
                'dropZoneActive': isDropActive,
            })}
        >
            {/* Render the dropzone */}
            <DropZoneMemo
                onDragStateChange={onDragStateChange}
                onFilesDrop={onFilesDrop}
                // onDragOut={()=>{
                //     console.log("+++ onDragOut")}
                // }
            >
                    <h5>Drop your files here</h5>

                    {files.length === 0 ? (
                        <h6>No files to upload</h6>
                    ) : (
                        <h6>Files to upload: {files.length}</h6>
                    )}

                {/* Render the file list */}
                <FileList files={files} />
            </DropZoneMemo>

        </div>
    )

})

export default DropFilesZone
