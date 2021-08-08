/**
 * Firebase details, you need to add your firebase project details here
 */
import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXka0avch5mwDpsFLflc7JCK5IKgXSpx8",
  authDomain: "auth-dev-fa6c5.firebaseapp.com",
  databaseURL: "https://auth-dev-fa6c5-default-rtdb.firebaseio.com",
  projectId: "auth-dev-fa6c5",
  storageBucket: "auth-dev-fa6c5.appspot.com",
  messagingSenderId: "919256370784",
  appId: "1:919256370784:web:50b8f53bad8f732ba67d05",
  measurementId: "G-7Y0638SJS7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
const database = firebase.database();

export {
  auth,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider,
  database,
  firebase,
};
