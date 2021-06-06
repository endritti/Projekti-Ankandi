import firebase from 'firebase';
 var firebaseConfig = {
    apiKey: "AIzaSyDTkUkPeFotKq_I-fc_kHNlcRxBQYzjcpo",
    authDomain: "login-ae9e3.firebaseapp.com",
    projectId: "login-ae9e3",
    storageBucket: "login-ae9e3.appspot.com",
    messagingSenderId: "730432317885",
    appId: "1:730432317885:web:a3d4c58257833309938ad4"
  };
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;