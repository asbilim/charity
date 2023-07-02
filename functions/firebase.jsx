import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkmi63BNembbqJaxOz2Zym3A4GxbhdkyI",
  authDomain: "crown-ff1d9.firebaseapp.com",
  projectId: "crown-ff1d9",
  storageBucket: "crown-ff1d9.appspot.com",
  messagingSenderId: "487858178684",
  appId: "1:487858178684:web:5285f92330d82b4e1a57f9",
  measurementId: "G-6HCXWQLV62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app, "gs://crown-ff1d9.appspot.com")

export default storage;