import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDymMU3lMfXkTmDgn73QSg0cOIlBjpMZBM",
  authDomain: "auth-in-react-4cfde.firebaseapp.com",
  databaseURL: "https://auth-in-react-4cfde-default-rtdb.firebaseio.com",
  projectId: "auth-in-react-4cfde",
  storageBucket: "auth-in-react-4cfde.appspot.com",
  messagingSenderId: "445579641863",
  appId: "1:445579641863:web:f2ea9775b7ddcb732b96a2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;