import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import parentLandingScreen from '../modules/parentLandingScreen/parentLandingScreen';
import parentScreen2 from '../modules/parentScreen2/parentScreen2';

const Stack = createNativeStackNavigator();

class homeStack extends React.Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={parentLandingScreen} />
        <Stack.Screen name="Statistics" component={parentScreen2} />
      </Stack.Navigator>
    );
  }
}
export default homeStack;
