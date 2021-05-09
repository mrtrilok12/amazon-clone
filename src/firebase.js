import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwgLBGvRYW9mK35zdACw-L4qg-uC4CRFg",
  authDomain: "clone-578fd.firebaseapp.com",
  projectId: "clone-578fd",
  storageBucket: "clone-578fd.appspot.com",
  messagingSenderId: "834782185430",
  appId: "1:834782185430:web:a67c0175e2a180aa168677",
  measurementId: "G-XBYYGNWQ1J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// firestore is real time database on firebase
const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
