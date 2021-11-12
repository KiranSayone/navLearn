import * as React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import manageChildren from '../modules/manageChildren/manageChildren';
import settings from '../modules/settings/settings';
import mainStack from './mainStack';

import logo from '../assets/images/logo.png';
import notification from '../assets/images/notification.png';
import messages from '../assets/images/messages.png';

const Drawer = createDrawerNavigator();

export default function Router() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitle: () => (
          <Image
            source={logo}
            style={{
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
      <Drawer.Screen name="Home" component={mainStack} />
      <Drawer.Screen name="Manage Children" component={manageChildren} />
      <Drawer.Screen name="Settings" component={settings} />
    </Drawer.Navigator>
  );
}
