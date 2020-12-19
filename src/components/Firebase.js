
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyChpAMDD06nZzy7Qu-f9DWCTPrZRMsJeQk",
    authDomain: "portafolio-lady-pino.firebaseapp.com",
    databaseURL: "https://portafolio-lady-pino-default-rtdb.firebaseio.com",
    projectId: "portafolio-lady-pino",
    storageBucket: "portafolio-lady-pino.appspot.com",
    messagingSenderId: "141011525224",
    appId: "1:141011525224:web:beed4d005f123c52c765dd"
};

const firebaseConf = firebase.initializeApp(config);

export default firebaseConf;