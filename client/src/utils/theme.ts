import { createMuiTheme } from '@material-ui/core/styles'

const primary = '#009688'
const secondary = '#311b92'
/** @description Material ui theme, used in wrapper.tsx */
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary
    },
    secondary: {
      main: secondary
    }
  }
})
