import React, {createContext, useContext, ReactNode} from 'react';
import {useQuery} from '@apollo/client';

import GET_CAPSULES from 'api/query/capsules';

const CapsulesContext = createContext({
  capsules: null,
  loading: true,
});

interface Props {
  children: ReactNode;
}

function CapsulesProvider({children}: Props) {
  const {data: capsules, loading: capsulesLoading} = useQuery(GET_CAPSULES);

  return (
    <CapsulesContext.Provider
      value={{
        capsules: capsules?.capsules,
        loading: capsulesLoading,
      }}>
      {children}
    </CapsulesContext.Provider>
  );
}

const useCapsules = () => useContext(CapsulesContext);

export {CapsulesProvider, useCapsules};
