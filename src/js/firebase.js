import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD4gduAL3l7Sf7z9a9EKorYr5349juAVho",
  authDomain: "first-7399e.firebaseapp.com",
  projectId: "first-7399e",
  storageBucket: "first-7399e.appspot.com",
  messagingSenderId: "906525000301",
  appId: "1:906525000301:web:0e3018867dfab8035bf564"
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}
