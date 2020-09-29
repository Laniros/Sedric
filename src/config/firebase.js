import firebase from 'firebase';
import 'firebase/firestore';

require("firebase/functions");

  firebase.initializeApp({
    apiKey: "AIzaSyCU2Qhju1YRqvp_i7XiM632bnAPWPsVMaA",
    authDomain: "sedric-7b393.firebaseapp.com",
    databaseURL: "https://sedric-7b393.firebaseio.com",
    projectId: "sedric-7b393",
    storageBucket: "sedric-7b393.appspot.com",
    messagingSenderId: "206580325151",
    appId: "1:206580325151:web:94470f94d62c1f86efee2a",
    measurementId: "G-LXS7BNPMZX"
  });
  firebase.firestore();




  export default firebase;