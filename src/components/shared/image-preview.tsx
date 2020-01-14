import React from 'react'
import styled from 'styled-components'
import icon from '../../styles/images/icon.svg'
import { DropzoneFileI, PureFileI } from '../../iterfaces/DropZoneI'

interface ImagePreviewI {
  file: DropzoneFileI | PureFileI
}

const ImagePreview: FC<ImagePreviewI> = ({ file }) => {
  console.log('IMAGE PREVIEW', file)

  return (
    <ImagePreviewWrapper>
      {file ? (
        <ImagePreviewImage src={file.preview} />
      ) : (
        <ImagePreviewImageDefault src={icon} />
      )}
    </ImagePreviewWrapper>
  )
}

const ImagePreviewWrapper = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid ${({ theme }) => theme.circleBorder};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 9px;
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
