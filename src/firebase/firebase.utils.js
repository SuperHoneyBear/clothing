import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAscDjQhTV6GxZsQJj7-kjU5tkmcwY-KAw",
  authDomain: "clothing-db-dca16.firebaseapp.com",
  projectId: "clothing-db-dca16",
  storageBucket: "clothing-db-dca16.appspot.com",
  messagingSenderId: "578796995143",
  appId: "1:578796995143:web:0287e1aadbe2871a99a762",
  measurementId: "G-8W5VYCTQYE",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
