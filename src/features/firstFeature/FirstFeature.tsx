import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { firstAction } from './firstFeatureTask';
import { RootState } from '../../redux/rootReducer';

const FristFeature: FC = () => {
    const count = useSelector<RootState, number>(state => state.first.count);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(firstAction());
    };
    return (
        <div style={{ lineHeight: '40px', margin: '100px', fontSize: '24px' }}>
            <h1>{count}</h1>
            <button onClick={handleClick}>click me</button>
            <h1>After Click, you will...</h1>
            <h1>1. trigger Action Creater to create action (firstAction)</h1>
            <h1>2. enter Epic</h1>
            <h1>3. fire dependencies's function, get 100</h1>
            <h1>4. trigger another Action Creater (firstActionFulfilled)</h1>
            <h1>5. enter reducer, update redux store</h1>
        </div>
    );
};

export default FristFeature;
