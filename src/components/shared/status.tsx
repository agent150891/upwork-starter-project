import React from 'react'
import styled from 'styled-components'

interface StatusPropsI {
  status: string
}

const statuses = {
  loading: {
    title: 'Uploading',
    button: 'Select file to upload'
  },
  loaded: {
    title: 'Drag & drop here to replace',
    button: 'Select file to replace'
  },
  default: {
    title: 'Drag & drop here',
    button: 'Select file to upload'
  }
}
const Status: FC<StatusPropsI> = ({ status }) => {
  return (
    <>
      {status === 'loading' && (
        <>
          <DropzoneStatus>{statuses.loading.title}</DropzoneStatus>
          <DropzoneOr>- or -</DropzoneOr>
          <DropzoneButton>{statuses.loading.button}</DropzoneButton>
        </>
      )}
      {status === 'loaded' && (
        <>
          <DropzoneStatus>{statuses.loaded.title}</DropzoneStatus>
          <DropzoneOr>- or -</DropzoneOr>
          <DropzoneButton>{statuses.loaded.button}</DropzoneButton>
        </>
      )}
      {status === '' && (
        <>
          <DropzoneStatus>{statuses.default.title}</DropzoneStatus>
          <DropzoneOr>- or -</DropzoneOr>
          <DropzoneButton>{statuses.default.button}</DropzoneButton>
        </>
      )}
    </>
  )
}

const DropzoneStatus = styled.div`
  color: ${({ theme }) => theme.textBlackUpload};
  font-size: 12px;
  margin-bottom: 8px;
`
const DropzoneOr = styled.div`
  color: ${({ theme }) => theme.textBlueHeader};
  font-size: 12px;
  margin-bottom: 8px;
`
const DropzoneButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.textBlueBody};
  font-size: 12px;
  cursor: pointer;
`

export { Status }
