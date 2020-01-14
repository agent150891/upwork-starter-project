import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    fontWeightRegular: number
    fontWeightBold: number
    borderColor: string
    textBlueHeader: string
    textBlueBody: string
    dropBackground: string
    white: string
    textBlack: string
    textBlackUpload: string
    dushedBorderColor: string
    circleBorder: string
  }
}
