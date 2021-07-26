import React from 'react';

import {RocketsProvider} from '../../components/_context/rockets';
import Rockets from '../../components/rockets';

interface Props {
  navigation: any;
  route: any;
}

function index({navigation, route}: Props) {
  return (
    <RocketsProvider>
      <Rockets navigation={navigation} route={route} />
    </RocketsProvider>
  );
}

export default index;
