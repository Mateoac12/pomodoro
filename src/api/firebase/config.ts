import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, doc, setDoc, arrayUnion, updateDoc, getDoc } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDABJO722x5_DWz9jAtH_SfeVRbv-BkTjc",
  authDomain: "tomatito-47cf7.firebaseapp.com",
  projectId: "tomatito-47cf7",
  storageBucket: "tomatito-47cf7.appspot.com",
  messagingSenderId: "319926968196",
  appId: "1:319926968196:web:a4cfa2f9c7f505c43bc7d1"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {
  db,
  collection,
  addDoc,
  doc,
  setDoc,
  arrayUnion,
  updateDoc,
  getDoc
}