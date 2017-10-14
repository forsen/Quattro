import firebase from '../firebase';
import { username, password } from '../../config';

export default () => dispatch => {
  dispatch({ type: 'hei' });
  firebase
    .auth()
    .signInWithEmailAndPassword(username, password)
    .then(user => {
      dispatch({ type: 'user', payload: user });
      firebase
        .database()
        .ref('posts/1234')
        .set({
          title: 'My awesome post',
          content: 'Some awesome content'
        })
        .then(success => {
          dispatch({ type: 'POSTS', payload: success });
        })
        .catch(error => {
          dispatch({ type: 'error', payload: error });
        });
    })
    .catch(error => {
      dispatch({ type: 'error', payload: error });
    });
};
