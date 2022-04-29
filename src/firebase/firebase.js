import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCZLN5Zhfg0Kt8Vv9_b_c0y3FTVNg5vbIA",
    authDomain: "linkedin-clone-5458c.firebaseapp.com",
    projectId: "linkedin-clone-5458c",
    storageBucket: "linkedin-clone-5458c.appspot.com",
    messagingSenderId: "113900998346",
    appId: "1:113900998346:web:85d5d1d75efad89e666e33"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()

export { db, auth};