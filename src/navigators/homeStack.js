import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import parentLandingScreen from '../modules/parentLandingScreen/parentLandingScreen';
import parentScreen2 from '../modules/parentScreen2/parentScreen2';
import profile from '../modules/Profile/profile';

const Stack = createNativeStackNavigator();

class homeStack extends React.Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Overview" component={parentLandingScreen} />
        <Stack.Screen name="Statistics" component={parentScreen2} />
        <Stack.Screen name="Profile" component={profile} />
      </Stack.Navigator>
    );
  }
}
export default homeStack;
