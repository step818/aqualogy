import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import 'firebase/auth';

// const settings = {timestampsInSnapshots: true};

var firebaseConfig = {
  apiKey: "AIzaSyC557LULkrM1gUvqiuw826lCXVQBgID6gg",
  authDomain: "aqualogy-f1531.firebaseapp.com",
  databaseURL: "https://aqualogy-f1531.firebaseio.com",
  projectId: "aqualogy-f1531",
  storageBucket: "aqualogy-f1531.appspot.com",
  messagingSenderId: "941784986270",
  appId: "1:941784986270:web:8112071cb40c308632818f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase.firestore().settings(settings);

export default firebase;