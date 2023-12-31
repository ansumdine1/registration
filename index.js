// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIFDcWwVd9p1IykE-WwxzbbwIKDRECWfE",
    authDomain: "stud-1c011.firebaseapp.com",
    projectId: "stud-1c011",
    storageBucket: "stud-1c011.appspot.com",
    messagingSenderId: "646252887164",
    appId: "1:646252887164:web:4f18914efb79bb3c195df9",
    measurementId: "G-RQCFPBMHVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

await setDoc(doc(db, "cities", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
});
