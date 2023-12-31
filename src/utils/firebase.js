// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVP3fCSBhntBQThXfkxow2Pzm4NDT_IMU",
  authDomain: "az-abrau-contact.firebaseapp.com",
  projectId: "az-abrau-contact",
  storageBucket: "az-abrau-contact.appspot.com",
  messagingSenderId: "1014580753695",
  appId: "1:1014580753695:web:9f6d61b3f4dda90304ac2a",
  measurementId: "G-BTF321NV0M",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = getDatabase(app);
export default database;