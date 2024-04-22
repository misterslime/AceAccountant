/* eslint-disable prettier/prettier */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from 'firebase/auth';
import {getFirestore, collection} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoYS-pdTdwccsWGVIlS459NOSji0BYWLA",
  authDomain: "aceaccounting-7707c.firebaseapp.com",
  projectId: "aceaccounting-7707c",
  storageBucket: "aceaccounting-7707c.appspot.com",
  messagingSenderId: "200319907616",
  appId: "1:200319907616:web:6baf1fe636785693840945"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
