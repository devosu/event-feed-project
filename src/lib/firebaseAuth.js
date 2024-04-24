// ./src/firebase/firebaseAuth.js
//
// Authentication handler for the signin/out button component.

// Essential imports.
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

// Local imports.
import { auth } from '@lib/firebaseInit';

// Handle sign in with Google.
export async function signInHandler() {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error(error);
  }
}

// Handle sign out.
export async function signOutHandler() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
}
