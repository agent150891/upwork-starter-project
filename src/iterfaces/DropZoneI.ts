import { DropzoneFile } from 'dropzone'

export interface DropzoneFileI extends DropzoneFile {
  preview?: string
}

export interface PureFileI extends File {
  preview?: string | undefined
}
