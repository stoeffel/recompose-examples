import React from 'react';
import { render } from 'react-dom';

export default function run(Component) {
  const rootEl = document.getElementById('root');

  render(
    <Component />,
    rootEl
  );
}
