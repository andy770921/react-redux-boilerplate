import { combineEpics } from 'redux-observable';
import { firstEpic } from '../redux/epics';

export default combineEpics(
    firstEpic
    // secondEpic
);
