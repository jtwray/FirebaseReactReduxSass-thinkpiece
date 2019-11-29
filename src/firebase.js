import firebase from 'firebase/app'
import 'firebase/firestore'
import "firebase/auth"

const config = {
    apiKey: "AIzaSyAMjyORdr48xL9SeT6D4dXK8mqsuopvVz0",
    authDomain: "jamestuckerwray.firebaseapp.com",
    databaseURL: "https://jamestuckerwray.firebaseio.com",
    projectId: "jamestuckerwray",
    storageBucket: "jamestuckerwray.appspot.com",
    messagingSenderId: "296764527336",
    appId: "1:296764527336:web:da4cabbffc9249ff4a6f5d",
    measurementId: "G-KK3K4NBE86"
};

firebase.initializeApp(config);


if (process.env.node_env === 'development') {

    window.firebase = firebase;
}





export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithPopup = () => auth.signInWithPopup(provider)
export const signInWithPhoneNumber = () => auth.signInWithPhoneNumber(provider)
export const signInWithRedirect = () => auth.signInWithRedirect(provider)

export const signOut = () => auth.signOut()
export default firebase
