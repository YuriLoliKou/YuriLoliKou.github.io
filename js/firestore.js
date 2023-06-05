// Import the functions you need from the SDKs you need
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, collection, setDoc, addDoc, getDocs, doc, query, where, updateDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6O4AGe6QFUswxGPCD6Wy3jpd0k3OVi6U",
    authDomain: "yurisite.firebaseapp.com",
    projectId: "yurisite",
    storageBucket: "yurisite.appspot.com",
    messagingSenderId: "811067116760",
    appId: "1:811067116760:web:32466a68a381ebc88f9bad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

async function googleSignIn() {
    let result;

    await signInWithPopup(auth, provider)
        .then((res) => {
            const credential = GoogleAuthProvider.credentialFromResult(res);
            const token = credential.accessToken;
            const user = res.user;

            result = { credential, token, user }

        }).catch((error) => { console.log(error) });

    return result;
}

async function emailSignIn(email, password) {
    let result;

    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            result = { user }
        }).catch((error) => { console.log(error) });

    return result;
}


export const dbAssembly = {
    ready: true,
    db, collection, setDoc, addDoc, getDocs, doc, query, where, updateDoc, googleSignIn, emailSignIn, signInWithEmailAndPassword, createUserWithEmailAndPassword
}
