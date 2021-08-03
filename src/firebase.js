import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBx6cJF0TTY5PEMVRwyE1xTUv5mxo4JPdI",
    authDomain: "disneyplus-mayukh.firebaseapp.com",
    projectId: "disneyplus-mayukh",
    storageBucket: "disneyplus-mayukh.appspot.com",
    messagingSenderId: "640226016612",
    appId: "1:640226016612:web:fb2d68f198d4c1711e8e71",
    measurementId: "G-SPLJ5S5PZG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
export default db; 