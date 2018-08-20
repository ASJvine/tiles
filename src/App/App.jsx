import React, { Fragment } from 'react';

import MainTitle from './common/MainTitle.atom';

import Tiles from '../tiles/Tiles.organism';

import './styleguide.scss';

const App = () => (
  <Fragment>
    <MainTitle text="Colored Tiles Game" />
    <Tiles />
  </Fragment>
);

export default App;
