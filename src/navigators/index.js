import * as React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppStack} from './app';
import profile from '../modules/Profile/profile';

import logo from '../assets/images/logo.png';
import notification from '../assets/images/notification.png';
import messages from '../assets/images/messages.png';

const Stack = createNativeStackNavigator();

class Router extends React.Component {
  render() {
    return (
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
        <Stack.Screen name="App" component={AppStack} />
        <Stack.Screen name="Profile" component={profile} />
      </Stack.Navigator>
    );
  }
}
export default Router;
