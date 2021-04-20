import firebase from 'firebase/app';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyB5ecZrYRnF20sZhkG_vaTFjXh7geOBdHo",
    authDomain: "crud-firebase-example-6bd9f.firebaseapp.com",
    projectId: "crud-firebase-example-6bd9f",
    storageBucket: "crud-firebase-example-6bd9f.appspot.com",
    messagingSenderId: "682993239535",
    appId: "1:682993239535:web:7a49d44ae2e3d38286221a"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const dataBase = fb.firestore();

