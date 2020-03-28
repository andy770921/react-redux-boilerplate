import { ActionType } from 'typesafe-actions';
import { firstAction, firstActionFulfilled, firstActionRejected } from '../features/firstPage/firstPageTask';

export type RootAction = ActionType<typeof firstAction | typeof firstActionFulfilled | typeof firstActionRejected>;
