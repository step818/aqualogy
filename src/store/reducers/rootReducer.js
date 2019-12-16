import authReducer from './authReducer';
import blogReducer from './blogReducer';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  blog: blogReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;