import * as firebase from 'firebase';
//require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyA6hECtnn1N2UkPCuMlrZPxUviT3wAEl38",
  authDomain: "barter-system-b0c07.firebaseapp.com",
  projectId: "barter-system-b0c07",
  storageBucket: "barter-system-b0c07.appspot.com",
  messagingSenderId: "551786457271",
  appId: "1:551786457271:web:d943d15533d24ca9ee0532"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
