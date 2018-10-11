import React from 'react'
import { openSnackbar } from '../exports'
import { Variant, State } from '../types'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

const mapStateToProps = (state: State) => ({

})
const mapDispatchToProps = (dispatch: Dispatch) => ({
  openSnackbar: (msg: string, vrt: Variant) => dispatch(openSnackbar(msg, vrt))
})
interface Props {
  openSnackbar: (message: string, variant: Variant) => void
}
/*
*@type: HOC(secondary)
*/
export const withSnack = (compType: string, WrappedComponent: any) => {
  return connect(null, mapDispatchToProps)(class SnackbarHOCReturn extends React.Component<Props> {
    componentDidMount() { this.props.openSnackbar(compType + ' loaded successfully', 'success') }
    render() { return (<WrappedComponent {...this.props} />) }
  })
}
