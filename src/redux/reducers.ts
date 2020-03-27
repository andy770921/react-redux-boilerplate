import { createReducer } from 'typesafe-actions';
import { RootAction } from '../application/rootAction';
import { firstActionFulfilled } from './actions';

interface State {
    count: number;
    data: {
        id: number;
        name: string;
        startTimeString: string;
        endTimeString: string;
        rules: string[];
        promotionConditionDiscountType: string;
        promotionConditionType: string;
        link: string;
    }[];
}

export const firstReducer = createReducer<State, RootAction>({
    count: 0,
    data: [],
}).handleAction(firstActionFulfilled, (state, action) => ({ ...state, count: action.payload }));
// .handleAction(firstActionFulfilled, (state, action) => ({
//     ...state,
//     data: action.payload,
// }));
