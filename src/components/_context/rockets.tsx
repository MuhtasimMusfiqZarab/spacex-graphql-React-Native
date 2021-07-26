import React, {createContext, useContext, ReactNode} from 'react';
import {useQuery} from '@apollo/client';

import GET_ROCKETS from '../../api/query/rockets';

const RocketsContext = createContext({
  rockets: null,
  loading: true,
});

interface Props {
  children: ReactNode;
}

function RocketsProvider({children}: Props) {
  const {data: rockets, loading: rocketsLoading} = useQuery(GET_ROCKETS);

  return (
    <RocketsContext.Provider
      value={{
        rockets: rockets?.rockets,
        loading: rocketsLoading,
      }}>
      {children}
    </RocketsContext.Provider>
  );
}

const useRockets = () => useContext(RocketsContext);

export {RocketsProvider, useRockets};
