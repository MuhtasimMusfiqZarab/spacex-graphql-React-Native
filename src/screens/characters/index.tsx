import React from 'react';

import {RocketsProvider} from '../../components/_context/rockets';
import Characters from '../../components/characters';

interface Props {
  navigation: any;
  route: any;
}

function index({navigation, route}: Props) {
  return (
    <RocketsProvider>
      <Characters navigation={navigation} route={route} />
    </RocketsProvider>
  );
}

export default index;
