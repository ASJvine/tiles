import React, { Fragment } from 'react';

import MainTitle from './common/MainTitle.atom';
import TilesAndHallOfFame from '../tiles/TilesAndHallOfFame.template';


import './styles.scss';

const App = () => (
  <Fragment>
    <MainTitle text="Colored Tiles Game" />
    <TilesAndHallOfFame />
  </Fragment>
);

export default App;
