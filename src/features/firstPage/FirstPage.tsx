import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { firstAction } from './firstPageTask';
import { RootState } from '../../redux/rootReducer';

const FristPage: FC = () => {
    const count = useSelector<RootState, number>(state => state.first.count);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(firstAction());
    };
    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleClick}>click me</button>
        </>
    );
};

export default FristPage;
