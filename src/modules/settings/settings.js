import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';

const settings = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerText}>Adjust your settings here.</Text>
      <Button
        title="Go back"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default settings;
