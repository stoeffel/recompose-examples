import React from 'react';
import { compose, withState, mapProps, defaultProps } from 'recompose';
import dispatched from '../enhancers/dispatched';

const UNDO = 'UNDO';
const REDO = 'REDO';

export default function undoable(Child) {
  const Undo = ({ past, present, future, updatePresent, undo, redo }) => (
    <div>
      <button
        disabled={!past.length}
        onClick={undo}>
        Undo
      </button>
      <button
        disabled={!future.length}
        onClick={redo}>
        Redo
      </button>
      <Child {...present} dispatch={updatePresent}/>
    </div>
  );

  const Undoable = compose(
    dispatched({ past: [], present: null future: [] }),
    defaultProps({ past: [], present: null future: [] }),
    mapProps(({ dispatch, past, present, future, ...rest }) => ({
      updatePresent: (change, before) => dispatch({
        type: change.type,
        past: [...past, before],
        present: change,
        future: []
      }),
      undo: () => dispatch({
        type: UNDO,
        past: past.slice(0, past.length - 1),
        present: past[past.length - 1],
        future: [present, ...future]
      }),
      redo: () => dispatch({
        type: REDO,
        past: [...past, present],
        present: future[0],
        future: future.slice(1)
      }),
      dispatch,
      past, present, future,
      ...rest
    }))
  )(Undo);
  return Undoable;
}
