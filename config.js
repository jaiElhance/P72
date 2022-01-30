import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBRMk_X2VvGuJrlSN1oTUgBcPwoZJaRpGQ",
  authDomain: "p-70-62c16.firebaseapp.com",
  projectId: "p-70-62c16",
  storageBucket: "p-70-62c16.appspot.com",
  messagingSenderId: "695998613376",
  appId: "1:695998613376:web:5088c3c6a70c784a48a365"
};

firebase.initializeApp(firebaseConfig)
export default firebase.firestore()