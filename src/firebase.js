import RNFirebase from 'react-native-firebase';

const configuration = {
  debug: false,
};

const firebase = RNFirebase.initializeApp(configuration);

export default firebase;
