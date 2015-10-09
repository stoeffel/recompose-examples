import React from 'react';
import Counter from './Counter';
import listOf from '../enhancers/listOf';
import withLog from '../enhancers/withLog';
import undoable from '../enhancers/undoable';

const examples = [{
  Example: Counter,
  name: 'Counter'
}, {
  Example: listOf(Counter, 'counter'),
  name: 'listOf(Counter)'
}, {
  Example: withLog(Counter),
  name: 'withLog(Counter)'
}, {
  Example: withLog(listOf(Counter, 'counter')),
  name: 'withLog(listOf(Counter))'
}, {
  Example: undoable(Counter),
  name: 'undoable(Counter)'
}, {
  Example: withLog(undoable(Counter)),
  name: 'withLog(undoable(Counter))'
}, {
  Example: undoable(listOf(Counter, 'counter')),
  name: 'undoable(listOf(Counter))'
}, {
  Example: listOf(undoable(Counter), 'counter'),
  name: 'listOf(undoable(Counter))'
}]

export default function() {
  return (
    <div>
      <h4>
        <a href='https://github.com/gaearon/react-elmish-example'
           target='_blank'>
          Source on Github
        </a>
      </h4>
      {examples.map(({ Example, name }, index) =>
        <div key={index}>
          <h1>{name}</h1>
          <Example />
        </div>
      )}
    </div>
  );
}

