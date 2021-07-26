import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

interface Props {
  item?: any;
  navigation?: any;
  navigationRoute?: string;
}

function renderCapsuleInfo(item: any) {
  return (
    <View style={styles.info}>
      <Text style={styles.headerTitle}>Status: {item?.status}</Text>
      <Text style={styles.subTitle}>Type: {item?.type}</Text>
    </View>
  );
}

function renderRocketInfo(item: any) {
  return (
    <View style={styles.info}>
      <Text style={styles.headerTitle}>{item?.name}</Text>
      <Text style={styles.subTitle}>First Flight: {item?.first_flight}</Text>
      <Text style={styles.subTitle}>Type: {item?.type}</Text>
    </View>
  );
}
function renderLocationInfo(item: any) {
  return (
    <View style={styles.info}>
      <Text style={styles.headerTitle}>{item?.name}</Text>
      <Text style={styles.subTitle}>Type: {item?.type}</Text>
    </View>
  );
}

function index({item, navigation, navigationRoute}: Props) {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          navigation.navigate(navigationRoute, {id: item?.id, item: item})
        }>
        {item?.image && (
          <Image source={{uri: `${item?.image}`}} style={styles.image} />
        )}

        {navigationRoute === 'Capsule' && renderCapsuleInfo(item)}
        {navigationRoute === 'Rocket' && renderRocketInfo(item)}
        {navigationRoute === 'Location' && renderLocationInfo(item)}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#c7ccdb',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
  },

  headerTitle: {
    fontSize: 18,
    color: '#2a324b',
    paddingBottom: 10,
  },
  subTitle: {
    fontSize: 15,
    color: '#4f546c',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  container: {
    flexDirection: 'row',
  },

  info: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default index;
