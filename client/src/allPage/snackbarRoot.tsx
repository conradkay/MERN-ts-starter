import * as React from 'react'
import {
  closeSnackbar, getClassSnackbarVariant
} from '../exports'
import { State, Variant } from '../types'
import { Dispatch } from 'redux'
import { withStyles, createStyles, Theme, SnackbarContent, Snackbar, IconButton, WithStyles } from '@material-ui/core'

import { connect } from 'react-redux'

import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import WarningIcon from '@material-ui/icons/Warning'
import ErrorIcon from '@material-ui/icons/Error'
import CloseIcon from '@material-ui/icons/Close'

const styles = (theme: Theme) =>
  createStyles({
    success: { backgroundColor: '#43A047' },
    warning: { backgroundColor: '#FFA000' },
    error: { backgroundColor: theme.palette.error.dark },
    close: { width: theme.spacing.unit * 3, height: theme.spacing.unit * 3 },
    message: { display: 'flex', alignItems: 'center' },
    icon: { fontSize: 20, marginRight: theme.spacing.unit },
  })

interface Props extends WithStyles<typeof styles> {
  message: string,
  open: boolean,
  closeSnackbar: () => void,
  variant: Variant
}
/*
* Takes in a message, and returns a success snackbar with the message.
* Also takes a variant from state containing which icon and background-color to use
*/

class SnackbarWrapComponent extends React.Component<Props> {
  render() {
    // Find what Icon to use for snackbar by variant
    const variantIcon: { success: any; warning: any; error: any } = {
      success: CheckCircleIcon,
      warning: WarningIcon,
      error: ErrorIcon
    }
    const { classes, open, message, variant } = this.props
    const backgroundClass: string = getClassSnackbarVariant(variant, classes)

    const Icon = variantIcon[variant]
    return (
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={open}
        autoHideDuration={2000}
        onClose={this.props.closeSnackbar}
      >
        <SnackbarContent
          className={backgroundClass}
          message={<span className={classes.message}>
            <Icon className={classes.icon} />
            <span style={{ marginLeft: 15, fontSize: 15 }}>{message}</span>

          </span>}
          action={[
            <IconButton
              key="close"
              color="inherit"
              className={classes.icon}
              onClick={this.props.closeSnackbar}
            >
              <CloseIcon className={classes.close} />
            </IconButton>
          ]}
        />
      </Snackbar>
    )
  }
}
const mapStateToProps = (state: State): { open: boolean; message: string; variant: Variant } => {
  return {
    open: state.snackbar.open,
    message: state.snackbar.message,
    variant: state.snackbar.variant
  }
}
const mapDispatchToProps = (dispatch: Dispatch): { closeSnackbar: () => void } => ({
  closeSnackbar: () => dispatch(closeSnackbar())
})

export const SnackbarRoot = connect(
  mapStateToProps, mapDispatchToProps
)(withStyles(styles)(SnackbarWrapComponent))
