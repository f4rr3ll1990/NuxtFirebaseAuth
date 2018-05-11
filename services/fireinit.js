import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var config = {
  apiKey: "AIzaSyCk0Fjf6iwJgYhcdYdviN6sZUF3bOf5hQk",
  authDomain: "vue-test-f4227.firebaseapp.com",
  databaseURL: "https://vue-test-f4227.firebaseio.com",
  projectId: "vue-test-f4227",
  storageBucket: "vue-test-f4227.appspot.com",
  messagingSenderId: "385763906256"
};

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const DB = firebase.database();
export default firebase
