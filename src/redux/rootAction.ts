import { ActionType } from 'typesafe-actions';
import { firstAction, firstActionFulfilled, firstActionRejected } from '../features/firstFeature/firstFeatureTask';

export type RootAction = ActionType<typeof firstAction | typeof firstActionFulfilled | typeof firstActionRejected>;
