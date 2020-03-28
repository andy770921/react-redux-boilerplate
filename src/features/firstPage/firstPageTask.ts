import { createAction, isActionOf, createReducer as firstReducer } from 'typesafe-actions';
import { Epic } from 'redux-observable';
import { of, from } from 'rxjs';
import { filter, catchError, map, mergeMap } from 'rxjs/operators';
import { RootAction } from '../../redux/rootAction';
import { RootState } from '../../redux/rootReducer';
import { Dependencies } from '../../redux/dependencies';

// Actions
const FIRST_ACTION = 'FIRST_ACTION';
const FIRST_ACTION_FULFILLED = 'FIRST_ACTION_FULFILLED';
const FIRST_ACTION_REJECTED = 'FIRST_ACTION_REJECTED';

// Action Creators
export const firstAction = createAction(FIRST_ACTION)();
export const firstActionFulfilled = createAction(FIRST_ACTION_FULFILLED)<number>();
export const firstActionRejected = createAction(FIRST_ACTION_REJECTED)<string>();

// Epics
export const firstEpic: Epic<
    RootAction,
    ReturnType<typeof firstActionFulfilled> | ReturnType<typeof firstActionRejected>,
    RootState,
    Dependencies
> = (action$, _state$, dependencies) =>
    action$.pipe(
        filter(isActionOf(firstAction)),
        mergeMap(() =>
            from(dependencies.getFirstAPI()).pipe(
                map(payload => firstActionFulfilled(payload)),
                catchError(error => of(firstActionRejected(error)))
            )
        )
    );

// Reducer

export interface State {
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

export default firstReducer<State, RootAction>({
    count: 0,
    data: [],
}).handleAction(firstActionFulfilled, (state, action) => ({ ...state, count: state.count + action.payload }));
// .handleAction(firstActionFulfilled, (state, action) => ({
//     ...state,
//     data: action.payload,
// }));
