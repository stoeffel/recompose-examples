import React from 'react';
import { compose, withState, mapProps, defaultProps } from 'recompose';

const Counter = ({ counter, increment, decrement, dispatch }) => (
  <p>
    Count: {counter}
    <button onClick={()=>{dispatch({ type: 'INCREMENT' }); increment();}}>+</button>
    <button onClick={()=>{dispatch({ type: 'DECREMENT' }); decrement();}}>-</button>
  </p>
);

const CounterContainer = compose(
  defaultProps({ dispatch: () => {}}),
  withState('counter', 'setCounter', 0),
  mapProps(({ setCounter, ...rest }) => ({
    increment: () => setCounter(n => n + 1),
    decrement: () => setCounter(n => n - 1),
    ...rest
  }))
)(Counter);

export default CounterContainer;
