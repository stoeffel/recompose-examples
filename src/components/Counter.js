import React from 'react';
import { compose, withState, mapProps, defaultProps } from 'recompose';
import dispatched from '../enhancers/dispatched';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const Counter = ({ counter, increment, decrement }) => (
  <p>
    Count: {counter}
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </p>
);

const CounterContainer = compose(
  dispatched,
  mapProps(({ dispatch, counter = 0, ...rest }) => ({
    increment: () => dispatch({ counter: counter + 1, type: INCREMENT }),
    decrement: () => dispatch({ counter: counter - 1, type: DECREMENT }),
    dispatch,
    counter,
    ...rest
  }))
)(Counter);

export default CounterContainer;
