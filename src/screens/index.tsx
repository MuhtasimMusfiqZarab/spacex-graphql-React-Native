import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {SvgXml} from 'react-native-svg';
import {TrendingIcon, PastIcon, UpcomingIcon} from '../_icons';

import EpisodesScreen from './capsules';
import CapsuleScreen from './capsule';
import RocketsScreen from './rockets';
import RocketScreen from './rocket';
import LocationsScreen from './locations';
import LocationScreen from './location';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const EpisodesStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Episodes"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ee7168',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Episodes" component={EpisodesScreen} />
      <Stack.Screen name="Episode" component={CapsuleScreen} />
    </Stack.Navigator>
  );
};
const RocketsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Rockets"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4AA0EC',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Rockets" component={RocketsScreen} />
      <Stack.Screen name="Rocket" component={RocketScreen} />
    </Stack.Navigator>
  );
};
const LocationsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Locations"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4AA0EC',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Locations" component={LocationsScreen} />
      <Stack.Screen name="Location" component={LocationScreen} />
    </Stack.Navigator>
  );
};

const CapsulesScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Episodes"
        component={EpisodesStack}
        options={{
          tabBarLabel: 'Past',
          tabBarIcon: ({color}) => (
            <SvgXml xml={PastIcon} width="100%" height="80%" />
          ),
        }}
      />
      <Tab.Screen
        name="Characters"
        component={RocketsStack}
        options={{
          tabBarLabel: 'Trending',
          tabBarIcon: ({color}) => (
            <SvgXml xml={TrendingIcon} width="100%" height="80%" />
          ),
        }}
      />
      <Tab.Screen
        name="Locations"
        component={LocationsStack}
        options={{
          tabBarLabel: 'Upcoming',
          tabBarIcon: ({color}) => (
            <SvgXml xml={UpcomingIcon} width="100%" height="100%" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function IndexScreen() {
  return (
    <Drawer.Navigator initialRouteName="Episode">
      <Drawer.Screen name="Capsules" component={CapsulesScreen} />
      <Drawer.Screen name="Rockets" component={RocketsStack} />
      <Drawer.Screen name="Launches" component={LocationsStack} />
    </Drawer.Navigator>
  );
}
