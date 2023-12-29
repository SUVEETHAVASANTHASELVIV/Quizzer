import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0eDwjlJXK50NVDU-joWPp1ToAF7VnFHA",
  authDomain: "quizzer-78810.firebaseapp.com",
  projectId: "quizzer-78810",
  storageBucket: "quizzer-78810.appspot.com",
  messagingSenderId: "926955688149",
  appId: "1:926955688149:web:1bee53b9182a5534c1d25c"
};

const app =initializeApp(firebaseConfig);

export const storage = getStorage(app);

const db= getFirestore();
export {db}