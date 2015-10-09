import React from 'react';
import { compose, defaultProps, mapProps } from 'recompose';
import dispatched from '../enhancers/dispatched';

export default function withLog(Child) {
  const Log = ({log, addLog}) => (
    <div>
      <Child dispatch={action => addLog({ action })} />
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
    dispatched,
    defaultProps({ log: [] }),
    mapProps(({ log, dispatch, ...rest }) => ({
      addLog: action => {
        dispatch({ log: [...log, action.action.type] });
      },
      dispatch,
      log,
      ...rest
    }))
  )(Log);
  return WithLog;
}
