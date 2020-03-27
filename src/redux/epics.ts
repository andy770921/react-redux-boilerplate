import { Epic } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import { of, from } from 'rxjs';
import { filter, catchError, map, mergeMap } from 'rxjs/operators';
import { RootAction } from '../application/rootAction';
import { firstAction, firstActionFulfilled, firstActionRejected } from './actions';
import { RootState } from '../application/rootReducer';
import { Dependencies } from '../application/dependencies';

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
