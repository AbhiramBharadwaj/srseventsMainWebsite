// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD2nWnq06fSm7Tn5VcP3_V3YQQaRc_tIp4",
  authDomain: "golden-eventz.firebaseapp.com",
  projectId: "golden-eventz",
  storageBucket: "golden-eventz.appspot.com",
  messagingSenderId: "809363062170",
  appId: "1:809363062170:web:676db834c4474244354e23",
  measurementId: "G-RG7STNK7GJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

