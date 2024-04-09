// ./firebase/firebase.js
//
// Setup the Firebase app and services for the application.
import { config } from 'dotenv-safe';
import { getApps, initializeApp } from 'firebase/app';
// import { initializeAuth } from 'firebase/auth';
// import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
// import { getFunctions } from 'firebase/functions';
// import { getAnalytics } from 'firebase/analytics';

// Setup the environment variables.
config();

// Production config setup.
const firebaseProdConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Modularize Firebase initialization.
export function createFirebaseInstance() {
  const app = getApps().length ? getApps()[0] : initializeApp(firebaseProdConfig);
  const db = getFirestore(app);

  return { app, db };
}

// Backwards compatible firebase service export.
const defaultFirebaseInstance = createFirebaseInstance();
export const { app, db } = defaultFirebaseInstance;
