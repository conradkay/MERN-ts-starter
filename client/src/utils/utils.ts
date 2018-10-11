import { Variant, State } from '../types'
/**
 * @description default Redux state to be used only for development
 * @property {number} money How much the user has, can be gained by creating or reviewing hackermen.
 * @todo make money 0 and isLoading to true as defualt when in production.
 * @property {boolean} isLoading whether or not we are fetching data from server, could become an object.
 * @property {Hackerman} hiredHackermenHackermen list of hackermen that are hired or all of them.
 * @todo make hackermen be loaded from server, or just have some loaded from server and have defaults while loading.
 */
export const defaultState: State = {
  money: 0,
  stuff: [0],
  snackbar: {
    open: false,
    message: 'WE ARE IN BOIS, HOLD YOUR GROUND',
    variant: 'success'
  },
  isLoading: false // TODO: make true in production
}

/**
 * @description used in snackbarRoot to determine how to display snackbar based on state.snackbar.variant
 * @returns {JSX inline style} whether or not to load an error icon with red or success + green etc.
 */
export const getClassSnackbarVariant = (variant: Variant, classes: { success: string; warning: string; error: string }) => {
  if (variant === 'success') { return classes.success }
  else if (variant === 'warning') { return classes.warning }
  else if (variant === 'error') { return classes.error }
  else { return classes.error }
}

/** @returns {JSX style} inline style */
export const getStylesHeader = (conditionTrue: boolean): { textDecoration: 'underline' } | {} => {
  // whether or not to underline text in header
  if (conditionTrue) {
    return { textDecoration: 'underline' }
  }
  else {
    return {} // no styles
  }
}
