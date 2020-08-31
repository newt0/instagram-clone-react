import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB7-j2aPzMkUQjkIEXvR0Lk9oYycXxsnmA",
  authDomain: "instagram-clone-react-b796c.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-b796c.firebaseio.com",
  projectId: "instagram-clone-react-b796c",
  storageBucket: "instagram-clone-react-b796c.appspot.com",
  messagingSenderId: "1081815081038",
  appId: "1:1081815081038:web:837a6dad7ef4c2633da31f",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const stroage = firebase.storage();

export { db, auth, stroage };
