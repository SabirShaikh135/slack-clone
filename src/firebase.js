// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBlTuedjaNZXZn7VMWLgZyOMQ8mMHvsO9c",
    authDomain: "slack-clone-56c29.firebaseapp.com",
    projectId: "slack-clone-56c29",
    storageBucket: "slack-clone-56c29.appspot.com",
    messagingSenderId: "1042234705129",
    appId: "1:1042234705129:web:19034050d6a1ae2fde5c78",
    measurementId: "G-D5CGMLV6BL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider};
  export default db;
  