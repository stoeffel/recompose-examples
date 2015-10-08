import React from 'react';
import { compose, withState, mapProps, defaultProps } from 'recompose';

export default function listOf(Item, what) {
  const List = ({ items, add, remove, dispatch }) => (
      <div>
        <button onClick={add}>
          Add {what}
        </button>
        <button onClick={remove}>
          Remove {what}
        </button>
        {items.map((item, i) =>
          <Item key={i} {...item} dispatch={action => dispatch({ action, index: i })}/>
        )}
      </div>);

  const ListOf = compose(
    defaultProps({ dispatch: () => {}}),
    withState('items', 'update', []),
    mapProps(({ update, ...rest }) => ({
      add: () => update(i => [...i, Item] ),
      remove: () => update(i => i.slice(0, -1)),
      ...rest
    }))
  )(List);
  return ListOf;
}
