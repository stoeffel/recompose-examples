import React from 'react';
import { compose, withState, mapProps, defaultProps } from 'recompose';

export default function dispatched(initialState) {

  return Component => {
    const DispatchedComponent = ({ state, dispatch, ...rest }) => (
      <Component {...state} {...rest} dispatch={dispatch}/>
    );

    const Dispatched = compose(
      withState('state', 'update', initialState),
      mapProps(({ dispatch, update, ...rest }) => ({
        dispatch: newState => {
          update(currentState => {
            const state = { ...currentState, ...newState };
            if (dispatch) dispatch(state, currentState);
            return state;
          });
        },
        update: update,
        ...rest
      }))
    )(DispatchedComponent);
    return Dispatched;
  };
}
