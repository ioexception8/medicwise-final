import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

var app = firebase.initializeApp({
    apiKey: "AIzaSyBJRD2VTrFenJvhRodKZVJ5n0wamwmDHu8",
    authDomain: "medicwise-78ff0.firebaseapp.com",
    projectId: "medicwise-78ff0",
    storageBucket: "medicwise-78ff0.appspot.com",
    messagingSenderId: "868061786787",
    appId: "1:868061786787:web:668d7a4448d025ce238516",
});

const auth = app.auth();
const db = app.firestore();

export { auth, db };
