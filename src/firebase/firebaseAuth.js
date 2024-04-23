// ./src/utils/authHandler.js
//
// Authentication handler for the signin/out button component.

// Essential imports.
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';

// Local imports.
import { auth } from '@firebase/firebaseInit';

// Handle sign in/out with Google.
