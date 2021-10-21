import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBSN8CtRajebpkN25ugPM3qb8wis5Eq8B4",
    authDomain: "net-ninja-marioplan-b43c9.firebaseapp.com",
    projectId: "net-ninja-marioplan-b43c9",
    storageBucket: "net-ninja-marioplan-b43c9.appspot.com",
    messagingSenderId: "358052816656",
    appId: "1:358052816656:web:6abfb14b4a04d7059da795",
    measurementId: "G-GR2DNZSNQY"
  };

// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 