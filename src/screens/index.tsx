import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {SvgXml} from 'react-native-svg';
import {TrendingIcon, PastIcon, UpcomingIcon} from '../_icons';

import CapsulesScreen from './capsules';
import CapsuleScreen from './capsule';
import RocketsScreen from './rockets';
import RocketScreen from './rocket';

import PastLaunchesScreen from './locations';
import PastLauncheScreen from './location';

import FutureLaunchesScreen from './locations';
import FutureLaunchScreen from './location';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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
const LaunchesTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Past"
        component={RocketsStack}
        options={{
          tabBarLabel: 'Past',
          tabBarIcon: ({color}) => (
            <SvgXml xml={PastIcon} width="100%" height="80%" />
          ),
        }}
      />

      <Tab.Screen
        name="Upcoming"
        component={RocketsStack}
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

const CapsulesStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Capsules"
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
      <Stack.Screen name="Capsules" component={CapsulesScreen} />
      <Stack.Screen name="Capsule" component={CapsuleScreen} />
    </Stack.Navigator>
  );
};

export default function IndexScreen() {
  return (
    <Drawer.Navigator initialRouteName="Episode">
      <Drawer.Screen name="Capsules" component={CapsulesStack} />
      <Drawer.Screen name="Rockets" component={RocketsStack} />
      <Drawer.Screen name="Launches" component={LaunchesTabNavigator} />
    </Drawer.Navigator>
  );
}
