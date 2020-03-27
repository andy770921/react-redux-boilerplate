import { ActionType } from 'typesafe-actions';
import * as allActions from '../redux/actions';

export type RootAction = ActionType<typeof allActions>;
