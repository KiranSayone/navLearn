import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import profile from '../modules/Profile/profile';
import homeStack from './homeStack';

const Tab = createBottomTabNavigator();

export default function Listtab() {
  return (
    <Tab.Navigator
      screenOptions={({gestureEnabled: false}, {headerShown: false})}>
      <Tab.Screen name="Home" component={homeStack} />
      <Tab.Screen name="Profile" component={profile} />
    </Tab.Navigator>
  );
}
