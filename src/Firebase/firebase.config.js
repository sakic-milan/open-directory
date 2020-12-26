import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB9yk3QBKIwWqJxn_W6PVCkk6p63V5gJa4",
  authDomain: "opendirectorydevelop.firebaseapp.com",
  projectId: "opendirectorydevelop",
  storageBucket: "opendirectorydevelop.appspot.com",
  messagingSenderId: "394985021128",
  appId: "1:394985021128:web:ed3325faa15b7637860ffd",
  measurementId: "G-C8LYT8VBFD",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseApp;
