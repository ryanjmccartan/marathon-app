import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCxYmQruwgx57i0_jvBKU2xvsfcioeAc0o",
    authDomain: "marathon-app-720e4.firebaseapp.com",
    databaseURL: "https://marathon-app-720e4.firebaseio.com",
    projectId: "marathon-app-720e4",
    storageBucket: "marathon-app-720e4.appspot.com",
    messagingSenderId: "201741603985",
    appId: "1:201741603985:web:dec687515cf925ad0d9b30"
  };

  firebase.initializeApp(config);

export default firebase;