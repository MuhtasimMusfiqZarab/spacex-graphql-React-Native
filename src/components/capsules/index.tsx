import React from 'react';
import {FlatList} from 'react-native';
import {Container, Card} from '../_root';
import {useCapsules} from '../_context/capsules';

interface Props {
  navigation: any;
  route: any;
}

function index({navigation, route}: Props) {
  const {capsules, loading} = useCapsules();

  return (
    <Container>
      <>
        <FlatList
          data={capsules}
          showsVerticalScrollIndicator={false}
          // onEndReached={() => {
          //   changeOffset();
          // }}
          onEndReachedThreshold={0.01}
          keyExtractor={episode => episode?.id}
          renderItem={({item}) => {
            return (
              <Card
                navigation={navigation}
                navigationRoute="Capsule"
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
