import React, {ReactNode} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

interface Props {
  item: any;
  route: string;
}

function capsuleDetail(item: any) {
  return (
    <View style={styles.containerMiddle}>
      <Text style={styles.text}>{item.id} </Text>
      <Text>Landings: {item?.landings} </Text>
      <Text>Original Launch: {item?.original_launch} </Text>
      <Text>Reuse Count: {item?.reuse_count} </Text>
      <Text>Status: {item?.status} </Text>
      <Text>Type: {item?.type} </Text>
    </View>
  );
}
function rocketDetail(item: any) {
  const dimensions = Dimensions.get('window');
  const imageHeight = Math.round((dimensions.width * 9) / 16);
  const imageWidth = dimensions.width;
  return (
    <View style={styles.container}>
      {item?.image && (
        <Image
          source={{uri: `${item?.image}`}}
          style={{height: imageHeight, width: imageWidth - 32}}
        />
      )}

      <Text style={styles.text}>{item?.name} </Text>
      <View style={{justifyContent: 'center'}}>
        <Text>type: {item?.type} </Text>
        <Text>Active: {item?.active} </Text>
        <Text>First Flight: {item?.first_flight} </Text>
        <Text>Stages: {item?.stages} </Text>
        <Text>Success Rate: {item?.success_rate_pct} </Text>
        <Text>Country: {item?.country} </Text>
        <Text>Company: {item?.company} </Text>
        <Text>Cost Per Launch: {item?.cost_per_launch} </Text>
        <Text>Boosters: {item?.boosters} </Text>
        <Text>Description: {item?.description} </Text>
        <Text>Height: {item?.height.meters} </Text>
      </View>
    </View>
  );
}
function locationDetail(item: any) {
  return (
    <View style={styles.containerMiddle}>
      <Text style={styles.text}>{item.name} </Text>
      <Text>Type: {item.type} </Text>
      <Text>Dimension: {item.dimension} </Text>
      <Text>Residents Total: {item.residents.length} </Text>
    </View>
  );
}

function index({route, item}: Props) {
  return (
    <>
      {route === 'Capsule' && capsuleDetail(item)}
      {route === 'Rocket' && rocketDetail(item)}
      {route === 'Location' && locationDetail(item)}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 16,
    borderWidth: 1,
    borderColor: '#c7ccdb',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  containerMiddle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
    borderWidth: 1,
    borderColor: '#c7ccdb',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    margin: 5,
  },
  image: {
    height: 100,
    width: 1,
    marginRight: 10,
  },
});

export default index;
