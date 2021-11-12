import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';

const manageChildren = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerText}>Manage your children here.</Text>
      <Button
        title="Go back"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default manageChildren;
