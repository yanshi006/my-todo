import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBB7h-Ede10mpTcZFDuS6-m5y0pufr5awc",
  authDomain: "my-todoapp-13382.firebaseapp.com",
  projectId: "my-todoapp-13382",
  storageBucket: "my-todoapp-13382.appspot.com",
  messagingSenderId: "52278385174",
  appId: "1:52278385174:web:94b97c2ef4f0331fbeb337",
  measurementId: "G-TZCKQX105B"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//分析するための物なので、今はいらない
// firebase.analytics();

export default firebase;