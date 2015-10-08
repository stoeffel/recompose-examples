import React from 'react';
import { compose, withState, mapProps } from 'recompose';

export default function withLog(Child) {
  const Log = ({log, onChange}) => (
    <div>
      <Child
        onChange={action => onChange({ action })} />
      <ul>
        {log.map((action, index) =>
          <li key={index}>
            {JSON.stringify(action)}
          </li>
        )}
      </ul>
    </div>
  );

  const WithLog = compose(
    withState('log', 'update', []),
    mapProps(({ update, ...rest }) => ({
      onChange: action => update(log => [...log, action.action] ),
      ...rest
    }))
  )(Log);
  return WithLog;
}
