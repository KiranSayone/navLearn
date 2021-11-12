import React, {useEffect} from 'react';
import {View, Text, Image, Button} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import styles from './styles';

const parentLandingScreen = ({navigation}) => {
  const recommendedChallenge = [
    {
      id: '1',
      subject: 'Social Science',
      title: 'Cold War',
    },
    {
      id: '2',
      subject: 'Mathematics',
      title: 'Algebra',
    },
    {
      id: '3',
      subject: 'Science',
      title: 'Photosynthesis',
    },
    {
      id: '4',
      subject: 'Physics',
      title: 'Pendulum',
    },
  ];
  const CardRender = ({item}) => {
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.challengeSubject}>{item.subject}:</Text>
        <Text style={styles.challengeTitle}>{item.title}</Text>
      </View>
    );
  };
  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <View style={styles.headerContainer}></View>
      <View style={styles.recommendedChallenge}>
        <Text style={styles.recommendedText}>Recommended Challenges</Text>
        <FlatList
          data={recommendedChallenge}
          renderItem={CardRender}
          keyExtractor={item => item.id}
          horizontal={true}
        />
      </View>
    </ScrollView>
  );
};

export default parentLandingScreen;
