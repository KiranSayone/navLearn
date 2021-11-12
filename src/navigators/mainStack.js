import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppStack} from './app';

const Stack = createNativeStackNavigator();

function mainStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}
export default mainStack;
