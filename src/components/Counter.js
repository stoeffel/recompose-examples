import React from 'react';
import { compose, withState, mapProps, defaultProps } from 'recompose';
import { dispatch } from '../dispatch';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const Counter = ({ counter, increment, decrement, onChange }) => (
  <p>
    Count: {counter}
    <button onClick={dispatch(onChange, INCREMENT, increment}>+</button>
    <button onClick={dispatch(onChange, DECREMENT, decrement}>-</button>
  </p>
);

const CounterContainer = compose(
  defaultProps({ onChange: () => {}}),
  withState('counter', 'setCounter', 0),
  mapProps(({ setCounter, ...rest }) => ({
    increment: () => setCounter(n => n + 1),
    decrement: () => setCounter(n => n - 1),
    ...rest
  }))
)(Counter);

export default CounterContainer;
