import React from 'react';
import { compose, withState, mapProps } from 'recompose';

export default function listOf(Item, what) {
  const List = ({ items, add }) => (
      <div>
        <button onClick={add}>
          Add {what}
        </button>
        <button onClick={add}>
          Remove {what}
        </button>
        {items.map((item, i) =>
          <Item key={i} {...item} />
        )}
      </div>);

  const ListOf = compose(
    withState('items', 'update', []),
    mapProps(({ update, ...rest }) => ({
      add: () => update(i => [...i, Item] ),
      ...rest
    }))
  )(List);
  return ListOf;
}
