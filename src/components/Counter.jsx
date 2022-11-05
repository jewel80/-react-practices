import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from '../services/actions/counterAction';

const Counter = () => {
    const count = useSelector((state) => state.count)
    
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(incrementCounter())
    }
    const handleDencrement = () => {
        dispatch(decrementCounter())
    }
    const handleReset = () => {
        dispatch(resetCounter())
    }

    return (
        <div>
            <h2>Counter App</h2>
            <h3>Count: {count}</h3>
            <button className='btn btn-info' onClick={handleIncrement}>Increment</button>
            <button className='btn btn-danger' onClick={handleReset}>Reset</button>
            <button className='btn btn-warning' onClick={handleDencrement}>Decrement</button>
        </div>
    )
}

export default Counter