import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCqMSIdsSCwlDcWVb-5KRRFd2ycqdbi73I",
  authDomain: "charitease-a38ab.firebaseapp.com",
  projectId: "charitease-a38ab",
  storageBucket: "charitease-a38ab.appspot.com",
  appId: "1:562504011497:android:e9c6482ceb3bd7d898ea78",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app, "gs://crown-ff1d9.appspot.com")

export default storage;