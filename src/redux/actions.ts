import { createAction } from 'typesafe-actions';

export const FIRST_ACTION = 'FIRST_ACTION';
export const FIRST_ACTION_FULFILLED = 'FIRST_ACTION_FULFILLED';
export const FIRST_ACTION_REJECTED = 'FIRST_ACTION_REJECTED';

export const firstAction = createAction(FIRST_ACTION)();
export const firstActionFulfilled = createAction(FIRST_ACTION_FULFILLED)<number>();
export const firstActionRejected = createAction(FIRST_ACTION_REJECTED)<string>();
