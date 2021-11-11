import React from 'react';
import {
  Button,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import logo from './src/assets/images/logo.png';
import notification from './src/assets/images/notification.png';
import messages from './src/assets/images/messages.png';

import parentLandingScreen from './src/modules/parentLandingScreen/parentLandingScreen';
import parentScreen2 from './src/modules/parentScreen2/parentScreen2';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: '',
          // () => (
          //   <Button
          //     onPress={() => alert('This is a button!')}
          //     title="Info"
          //     color="#000000"
          //   />
          // )
          headerLeft: () => (
            <Image
              source={logo}
              style={{
                marginLeft: -25,
                marginTop: -15,
                transform: [{scale: 0.8}],
              }}
            />
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => {
                  alert('This is a button.');
                }}>
                <Image
                  source={notification}
                  style={{width: 30, height: 30, margin: 10}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  alert('This is a button.');
                }}>
                <Image
                  source={messages}
                  style={{width: 30, height: 30, margin: 10}}
                />
              </TouchableOpacity>
            </View>
          ),
        }}>
        <Stack.Screen name="Home" component={parentLandingScreen} />
        <Stack.Screen name="Statistics" component={parentScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
