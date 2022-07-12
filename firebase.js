// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc, Timestamp } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { seedDatabase } from './db/seed';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBl4cSo-ra9AI78gdBUJBzruY8vCU-mfUQ',
  authDomain: 'fir-auth-4936b.firebaseapp.com',
  projectId: 'fir-auth-4936b',
  storageBucket: 'fir-auth-4936b.appspot.com',
  messagingSenderId: '1035403484004',
  appId: '1:1035403484004:web:348483bf3eaa1cacd43871',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

const storage = getStorage();

const storageRef = ref(storage);

//seedDatabase(db, storage);

// const docData = {
//   stringExample: 'Hello world!',
//   booleanExample: true,
//   numberExample: 3.14159265,
//   dateExample: Timestamp.fromDate(new Date('December 10, 1815')),
//   arrayExample: [5, true, 'hello'],
//   //img: bookRef,
// };
// const textRef = doc(db, 'data', 'one');
// setDoc(textRef, docData, { merge: true });

export { auth, db, storage, storageRef };
