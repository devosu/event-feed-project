// ./firebase/firebase.js
//
// Setup the Firebase app and services for the application.

import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { initializeAuth } from 'firebase/auth';
// import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
// import { getFunctions } from 'firebase/functions';
// import { getAnalytics } from 'firebase/analytics';

// Production config setup.
const firebaseProdConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Modularize Firebase initialization.
export function createFirebaseInstance() {
  const app = getApps().length
    ? getApps()[0]
    : initializeApp(firebaseProdConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  return { app, auth, db };
}

// Backwards compatible firebase service export.
const defaultFirebaseInstance = createFirebaseInstance();
export const { app, auth, db } = defaultFirebaseInstance;
