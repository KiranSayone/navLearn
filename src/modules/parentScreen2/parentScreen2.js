import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';

const parentScreen2 = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerText}>Welcome to the second screen James!</Text>
      <Button
        title="Go back"
        onPress={() => {
          navigation.navigate('Overview');
        }}
      />
    </View>
  );
};

export default parentScreen2;
