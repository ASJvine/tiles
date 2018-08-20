/* global document */
import React from 'react';
import { render } from 'react-dom';
import App from './app/App.jsx'; // eslint-disable-line

render(
  <App />,
  document.getElementById('app'),
);
