import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  recommendedText: {
    flex: 0,
    marginTop: 20,
    marginLeft: 20,
    fontSize: 30,
  },
  headerContainer: {
    flex: 2,
    width: '100%',
    backgroundColor: '#78a8fa',
  },
  cardContainer: {
    alignContent: 'center',
    width: 210,
    height: 230,
    margin: 20,
    borderRadius: 15,
    backgroundColor: '#246ae3',
  },
  safeArea: {
    padding: 20,
  },
  recommendedChallenge: {
    flex: 1.5,
  },
  cardSubject: {
    color: 'black',
    fontSize: 10,
  },
  challengeSubject: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 10,
  },
  challengeTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
  },
});
