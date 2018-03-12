import firebase from 'react-native-firebase';
import { username, password } from '../../config';

export const SAVE_TRIP_SUCCESS = 'SAVE_TRIP_SUCCESS';
export const SAVE_TRIP_ERROR = 'SAVE_TRIP_ERROR';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';

export const saveTrip = (trip) => dispatch => {
    firebase
      .auth()
      .signInAndRetrieveDataWithEmailAndPassword(username, password)
      .then(() => {
        firebase
          .database()
          .ref('trips')
          .push(trip)
          .then(success => {
            dispatch({ type: SAVE_TRIP_SUCCESS, payload: success });
          })
          .catch(error => {
            dispatch({ type: SAVE_TRIP_ERROR, payload: error });
          });
      })
      .catch(error => {
        debugger;
        dispatch({ type: SIGN_IN_ERROR, payload: error });
      });
};
