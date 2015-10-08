import React from 'react';
import { compose, withState, mapProps, defaultProps } from 'recompose';
import { dispatch } from '../dispatch';

const ADD = 'ADD';
const REMOVE = 'REMOVE';

export default function listOf(Item, what) {

  const List = ({ items, add, remove, onChange }) => (
    <div>
      <button onClick={dispatch(onChange, ADD, add}>
        Add {what}
      </button>
      <button onClick={dispatch(onChange, REMOVE, remove}>
        Remove {what}
      </button>
      {items.map((item, i) =>
        <Item key={i} {...item} onChange={action => onChange({ type: 'CHANGE', action, index: i })}/>
      )}
    </div>);

  const ListOf = compose(
    defaultProps({ onChange: () => {}}),
    withState('items', 'update', []),
    mapProps(({ update, ...rest }) => ({
      add: () => update(i => [...i, Item] ),
      remove: () => update(i => i.slice(0, -1)),
      ...rest
    }))
  )(List);
  return ListOf;
}
