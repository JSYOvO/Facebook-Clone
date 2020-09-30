import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDgLIyVryGZA2OGJQCPqzLoyxscr-vhdGE",
    authDomain: "facebook-clone-983da.firebaseapp.com",
    databaseURL: "https://facebook-clone-983da.firebaseio.com",
    projectId: "facebook-clone-983da",
    storageBucket: "facebook-clone-983da.appspot.com",
    messagingSenderId: "716432408170",
    appId: "1:716432408170:web:3e5ad498c2107075135413",
    measurementId: "G-EEFQ1C8MF3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  // Need to Google Login
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
