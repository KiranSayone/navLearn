import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListTabs from './tab';

const AppStackNav = createNativeStackNavigator();

export function AppStack() {
  return (
    <AppStackNav.Navigator
      screenOptions={({gestureEnabled: false}, {headerShown: false})}>
      <AppStackNav.Screen name="Tabs" component={ListTabs} />
    </AppStackNav.Navigator>
  );
}
