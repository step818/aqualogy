import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/functions';
import 'firebase/storage';



// const firebaseConfig = {
//   apiKey: "AIzaSyC557LULkrM1gUvqiuw826lCXVQBgID6gg",
//   authDomain: "aqualogy-f1531.firebaseapp.com",
//   databaseURL: "https://aqualogy-f1531.firebaseio.com",
//   projectId: "aqualogy-f1531",
//   storageBucket: "aqualogy-f1531.appspot.com",
//   messagingSenderId: "941784986270",
//   appId: "1:941784986270:web:8112071cb40c308632818f"
// };
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });
// Initialize other services on firebase instance
firebase.firestore();
firebase.functions(); 
firebase.storage();

export const storage = firebase.storage();
export const storageRef = storage.ref();
export const database = firebase.firestore();

export default firebase;


// var firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

