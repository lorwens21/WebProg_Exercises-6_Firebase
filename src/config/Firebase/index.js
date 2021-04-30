import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCeiPfvOz7oTFEuG9f35ONYxYpjEGkJVJ8",
  authDomain: "web-programming-d5578.firebaseapp.com",
  databaseURL: "https://web-programming-d5578-default-rtdb.firebaseio.com",
  projectId: "web-programming-d5578",
  storageBucket: "web-programming-d5578.appspot.com",
  messagingSenderId: "974055618360",
  appId: "1:974055618360:web:40a8b548ba514d803db3cd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;