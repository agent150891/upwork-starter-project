import React from 'react'
import styled from 'styled-components'
import icon from '../../styles/images/icon.svg'
import { DropzoneFileI, PureFileI } from '../../iterfaces/DropZoneI'

interface ImagePreviewPropsI {
  file: DropzoneFileI | PureFileI
  status: string
}

const ImagePreview: FC<ImagePreviewPropsI> = ({ file, status }) => {
  return (
    <ImagePreviewWrapper>
      {status === 'loading' && <ImageSpinner />}
      {file ? (
        <ImagePreviewImage src={file.preview} />
      ) : (
        <ImagePreviewImageDefault src={icon} />
      )}
    </ImagePreviewWrapper>
  )
}

const ImageSpinner = styled.div`
  position: absolute;
  left: -1px;
  top: -1px;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  overflow: hidden;
  margin-bottom: 9px;
  border: solid 1px transparent;
  border-top: solid 1px #0088ff;
  border-left: solid 1px #0088ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
const ImagePreviewWrapper = styled.div`
  position: relative;
  width: 81px;
  height: 81px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 9px;
  border-radius: 50%;
  border: solid 1px ${({ theme }) => theme.circleBorder};
}
`
const ImagePreviewImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`
const ImagePreviewImageDefault = styled.img`
  width: 29px;
  height: 45px;
`

export { ImagePreview }
