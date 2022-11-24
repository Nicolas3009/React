
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDT7JpnHSVKsxoKLJSnT1OEYA7Diigvpgg",
    authDomain: "la-isla-7bdc9.firebaseapp.com",
    projectId: "la-isla-7bdc9",
    storageBucket: "la-isla-7bdc9.appspot.com",
    messagingSenderId: "139371249193",
    appId: "1:139371249193:web:657ed4448b9271695d6638"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);