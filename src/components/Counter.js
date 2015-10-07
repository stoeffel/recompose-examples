import React from 'react';
import { compose, withState, mapProps } from 'recompose';

const Counter = ({ counter, increment, decrement }) => (
  <p>
    Count: {counter}
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </p>
);

const CounterContainer = compose(
  withState('counter', 'setCounter', 0),
  mapProps(({ setCounter, ...rest }) => ({
    increment: () => setCounter(n => n + 1),
    decrement: () => setCounter(n => n - 1),
    ...rest
  }))
)(Counter);

export default CounterContainer;
