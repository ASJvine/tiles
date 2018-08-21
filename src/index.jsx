/* global document */
import React from 'react';
import { render } from 'react-dom';
import MainApp from './app/MainApp.jsx'; // eslint-disable-line

render(
  <MainApp />,
  document.getElementById('app'),
);
