import React from 'react'
import { openSnackbar } from '../exports'
import { Variant, State } from '../types'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

const mapStateToProps = (state: State) => ({
  open: state.snackbar.open
})
const mapDispatchToProps = (dispatch: Dispatch) => ({
  openSnackbar: (msg: string, vrt: Variant) => dispatch(openSnackbar(msg, vrt))
})
interface Props {
  openSnackbar: (message: string, variant: Variant) => void
  open: boolean
}
/*
*@type: HOC(secondary)
*/
export const withSnack = (compType: string, WrappedComponent: any) => {
  return connect(mapStateToProps, mapDispatchToProps)(class SnackbarHOCReturn extends React.Component<Props> {
    componentDidMount() {
      if (!this.props.open) {
        this.props.openSnackbar(compType + ' loaded successfully', 'success')
      }
    }
    render() { return (<WrappedComponent {...this.props} />) }
  })
}
