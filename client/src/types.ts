export type Variant = 'success' | 'warning' | 'error'
export type Snackbar = {
  open: false;
  message: string;
  variant: Variant;
}
export type State = Readonly<{
  money: number;
  snackbar: Snackbar;
  isLoading: any;
  stuff: number[];
}>
// used in api.ts
export type Action = Readonly<{ type: 'OPEN_SNACKBAR'; message: string; variant: Variant }
  | { type: 'CLOSE_SNACKBAR' }

  | { type: 'GET_STATE_REQUEST' }
  | { type: 'GET_STATE_RESPONCE'; state: State }>
