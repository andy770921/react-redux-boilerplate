import { combineReducers } from 'redux';
import { firstReducer } from '../redux/reducers';

const rootReducer = combineReducers({
    first: firstReducer,
    //   second: secondReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
