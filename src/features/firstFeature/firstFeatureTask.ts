import { Epic, ofType } from 'redux-observable';
import { of, from } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { RootAction } from '../../redux/rootAction';
import { RootState } from '../../redux/rootReducer';
import { Dependencies } from '../../redux/dependencies';

// Actions
const FIRST_ACTION = 'FIRST_ACTION';
const FIRST_ACTION_FULFILLED = 'FIRST_ACTION_FULFILLED';
const FIRST_ACTION_REJECTED = 'FIRST_ACTION_REJECTED';

// Action Interfaces
interface FirstAction {
    type: typeof FIRST_ACTION;
}
interface FirstActionFulfilled {
    type: typeof FIRST_ACTION_FULFILLED;
    payload: number;
}
interface FirstActionRejected {
    type: typeof FIRST_ACTION_REJECTED;
    payload: string;
}

export type FirstActions = FirstAction | FirstActionFulfilled | FirstActionRejected;

// Action Creators
export const firstAction = (): FirstAction => ({ type: FIRST_ACTION });
export const firstActionFulfilled = (count: number): FirstActionFulfilled => ({
    type: FIRST_ACTION_FULFILLED,
    payload: count,
});
export const firstActionRejected = (errorMsg: string): FirstActionRejected => ({
    type: FIRST_ACTION_REJECTED,
    payload: errorMsg,
});

// Epics
export const firstEpic: Epic<FirstActions, FirstActionFulfilled | FirstActionRejected, RootState, Dependencies> = (
    action$,
    _state$,
    dependencies
) =>
    action$.pipe(
        ofType(FIRST_ACTION),
        mergeMap(() =>
            from(dependencies.getFirstAPI()).pipe(
                map(payload => firstActionFulfilled(payload.count)),
                catchError(error => of(firstActionRejected(error)))
            )
        )
    );

// Reducer
const initialState = {
    count: 0,
    isFetching: false,
    errorMsg: '',
    data: [{ id: 0, name: '', link: '' }],
};

export default function firstReducer(state = initialState, action: RootAction) {
    switch (action.type) {
        case FIRST_ACTION:
            return { ...state, isFetching: true };
        case FIRST_ACTION_FULFILLED:
            return { ...state, isFetching: false, count: state.count + action.payload };
        case FIRST_ACTION_REJECTED:
            return { ...state, isFetching: false, errorMsg: action.payload };
        default:
            return state;
    }
}
