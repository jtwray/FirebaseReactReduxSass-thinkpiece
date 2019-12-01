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

export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const githubProvider = new firebase.auth.GithubAuthProvider()
export const fbProvider = new firebase.auth.FacebookAuthProvider()


const firebaseAuth = provider => auth.signInWithRedirect(provider);

export const signInWithGoogle = () => firebaseAuth(googleProvider)
export const signInWithGithub = () => firebaseAuth(githubProvider)
export const signInWithFacebook = () => firebaseAuth(fbProvider)


export const signOut = () => auth.signOut()
export default firebase
