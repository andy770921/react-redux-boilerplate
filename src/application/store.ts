import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer, { RootState } from './rootReducer';
import rootEpic from './rootEpic';
import { RootAction } from './rootAction';
import { dependencies } from './dependencies';

const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState>({
    dependencies,
});

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

export default store;
