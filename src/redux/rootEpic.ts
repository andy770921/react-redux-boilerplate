import { combineEpics } from 'redux-observable';
import { firstEpic } from '../features/firstFeature/firstFeatureTask';

export default combineEpics(
    firstEpic
    // secondEpic
);
