import React from 'react'
import { openSnackbar } from '../exports'
import { Variant, State } from '../types'
import { connect } from 'react-redux'

const mapStateToProps = (state: State) => ({
  open: state.snackbar.open
})
const mapDispatchToProps = {
  openSnackbar
}
interface Props {
  openSnackbar: (message: string, variant: Variant) => void
  open: boolean
}
/*
*@type: HOC(secondary)
*/
export const withSnack = (compType: string, WrappedComponent: any, variant?: Variant, message?: string) => {
  return connect(mapStateToProps, mapDispatchToProps)(class SnackbarHOCReturn extends React.Component<Props> {
    componentDidMount() {
      if (!this.props.open) {
        this.props.openSnackbar(compType + message || ' loaded successfully', variant || 'success')
      }
    }
    render() { return (<WrappedComponent {...this.props} />) }
  })
}
