import React from 'react';

import MainTitle from './common/MainTitle.atom';

import Tiles from '../tiles/Tiles.organism';

import './styleguide.scss';

const App = () => (
  <div>
    <MainTitle text="Colored Tiles Game" />
    <Tiles />
  </div>
);

export default App;
