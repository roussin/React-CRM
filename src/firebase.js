// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyD-AEE_TReL64nfvdkI3YdyQ-XRyBQFbtY",
    authDomain: "crm-react-66f58.firebaseapp.com",
    projectId: "crm-react-66f58",
    storageBucket: "crm-react-66f58.appspot.com",
    messagingSenderId: "492632544145",
    appId: "1:492632544145:web:50d5d69decd3d3f6950030",
    measurementId: "G-K5CK1B1R7C"
}

firebase.initializeApp(config);

export default firebase;
