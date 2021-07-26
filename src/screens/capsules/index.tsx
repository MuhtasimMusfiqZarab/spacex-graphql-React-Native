import React from 'react';

import {CapsulesProvider} from 'components/_context/capsules';
import Capsules from 'components/capsules';

interface Props {
  navigation: any;
  route: any;
}

function index({navigation, route}: Props) {
  return (
    <CapsulesProvider>
      <Capsules navigation={navigation} route={route} />
    </CapsulesProvider>
  );
}

export default index;
