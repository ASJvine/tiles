import React from 'react';

import MainTitle from './common/MainTitle.atom';

import Tiles from '../tiles/Tiles.organism';

const App = () => (
  <div>
    <MainTitle text="Hello Colored Tiles Game" />
    <Tiles />
  </div>
);

export default App;
