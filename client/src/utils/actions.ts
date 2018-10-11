import { Variant, Action } from '../types'

export const closeSnackbar = (): Action => ({
  type: 'CLOSE_SNACKBAR'
})

export const openSnackbar = (message: string, variant: Variant): Action => ({
  type: 'OPEN_SNACKBAR', message, variant
})
