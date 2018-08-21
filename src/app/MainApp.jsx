import React, { Fragment } from 'react';

import MainTitle from './common/MainTitle.atom';
import TilesAndHallOfFame from '../tiles/TilesAndHallOfFame.organism';


import './styles.scss';

const MainApp = () => (
  <Fragment>
    <MainTitle text="Colored Tiles Game" />
    <TilesAndHallOfFame />
  </Fragment>
);

export default MainApp;
