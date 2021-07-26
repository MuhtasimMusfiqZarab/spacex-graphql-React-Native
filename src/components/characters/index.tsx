import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import {Container, Card, Searchbar, Dropdown} from '../_root';

import {useRockets} from '../_context/rockets';

interface Props {
  navigation: any;
  route: any;
}

function index({navigation, route}: Props) {
  const {rockets, loading} = useRockets();

  console.log('This are the rockets', rockets);

  return (
    <Container>
      <>
        <FlatList
          data={rockets}
          showsVerticalScrollIndicator={false}
          // onEndReached={() => {
          //   changeOffset();
          // }}
          keyExtractor={character => character?.id}
          renderItem={({item}) => {
            return (
              <Card
                navigation={navigation}
                navigationRoute="Character"
                item={item}
              />
            );
          }}
        />
      </>
    </Container>
  );
}

export default index;
