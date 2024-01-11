// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvaxjrQcP4pQrevHTuUsa9_Yv0A2FfHo8",
  authDomain: "plantas-9c097.firebaseapp.com",
  projectId: "plantas-9c097",
  storageBucket: "plantas-9c097.appspot.com",
  messagingSenderId: "126731826891",
  appId: "1:126731826891:web:b8dc8fe3daf6a204958d4e",
  measurementId: "G-8M7ST0Z78B"
};

const app = firebase.initializeApp(firebaseConfig);
// Initialize Firebase

function getFirestore() {
  return firebase.firestore(app)
}
export default getFirestore;