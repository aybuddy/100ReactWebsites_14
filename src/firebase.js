import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBPbjP-7pCEzfJHvfCdBDYXMvHgK0hYhTw',
  authDomain: 'tiktok-clone-cp.firebaseapp.com',
  projectId: 'tiktok-clone-cp',
  storageBucket: 'tiktok-clone-cp.appspot.com',
  messagingSenderId: '151267792801',
  appId: '1:151267792801:web:586a38d67a8fcba6c39de0',
  measurementId: 'G-K53W8T0HH5',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
