import { combineEpics } from 'redux-observable';
import { firstEpic } from '../features/firstPage/firstPageTask';

export default combineEpics(
    firstEpic
    // secondEpic
);
