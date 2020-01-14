import React, { useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import { ImagePreview } from './image-preview'
import { Status } from './status'
import { PureFileI, DropzoneFileI } from '../../iterfaces/DropZoneI'
import 'react-tippy/dist/tippy.css'
import { Tooltip } from 'react-tippy'

interface MyUploaderStyledI {
  isDragActive: boolean
}

const MyUploader: FC = () => {
  const [files, setFiles] = useState<Array<PureFileI>>([])
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: false,
    accept: 'image/*',
    onDrop: (files) => {
      setError('')
      if (files.length === 0) {
        setError('No files found!')
        return
      }
      if (files.length > 1) {
        setError('You can upload only one file')
        return
      }
      setStatus('loading')
      const file = files[0]
      const image = new Image()
      image.addEventListener('load', () => {
        if (image.width > 100) {
          setStatus('loaded')
          setError(
            `width of selected file: ${image.width}px. \n  maximum width: 100px`
          )
          return
        }
        if (image.height > 100) {
          setStatus('loaded')
          setError(
            `height of selected file: ${image.height}px. \n  maximum height: 100px`
          )
          return
        }
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
        setFiles([file])
        setStatus('loaded')
      })
      image.src = window.URL.createObjectURL(file)
    }
  })
  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => {
        if (file.preview) {
          URL.revokeObjectURL(file.preview)
        }
      })
    },
    [files]
  )
  return (
    <DropzoneWrapper>
      <Dropzone isDragActive={isDragActive} {...getRootProps()}>
        <input {...getInputProps()} />
        <Tooltip title={error} theme="light" arrow open disabled={!error} />
        <ImagePreview status={status} file={files[0]} />
        <Status status={status} />
      </Dropzone>
    </DropzoneWrapper>
  )
}

const DropzoneWrapper = styled.div`
  padding: 20px;
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`
const Dropzone = styled.div<MyUploaderStyledI>`
  ${({ theme, isDragActive }) =>
    isDragActive && 'border: 1px dashed' + theme.dushedBorderColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${({ theme, isDragActive }) =>
    isDragActive ? theme.dropBackground : 'inherit'};
`

export { MyUploader }
