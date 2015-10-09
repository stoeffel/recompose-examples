import React from 'react';
import { compose, mapProps, defaultProps } from 'recompose';
import dispatched from './dispatched';

const ADD = 'ADD';
const REMOVE = 'REMOVE';

export default function listOf(Item, what) {

  const List = ({ items, add, remove, change }) => (
    <div>
      <button onClick={add}>
        Add {what}
      </button>
      <button onClick={remove}>
        Remove {what}
      </button>
      {items.map((item, i) =>
        <Item key={i} {...item} dispatch={newItem => change(i, newItem)}/>
      )}
    </div>);

  const ListOf = compose(
    dispatched({ items: [] }),
    defaultProps({ items: [] }),
    mapProps(({ dispatch, items, ...rest }) => ({
      add: () => dispatch({ items: [...items, {}], type: ADD }),
      remove: () => dispatch({ items: items.slice(0, -1), type: REMOVE }),
      change: (i, newItem) => dispatch({
        type: newItem.type,
        items: [
          ...items.slice(0, i),
          newItem,
          ...items.slice(i + 1)
        ]
      }),
      dispatch, items,
      ...rest
    }))
  )(List);
  return ListOf;
}
