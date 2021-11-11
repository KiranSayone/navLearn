import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import styles from './styles';

const parentLandingScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerText}>Welcome back James!</Text>
      <Button
        title="Go to next screen."
        onPress={() => {
          navigation.navigate('Statistics');
        }}
      />
    </View>
  );
};

export default parentLandingScreen;
