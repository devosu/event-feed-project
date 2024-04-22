// ./src/app/components/authButton.js
//
// AuthButton component for the MainHeader.

'use client';

// Essential imports.
import React, { useState } from 'react';

// Local imports.

export default function AuthButton({ handleAuth }) {
  // The buttonClassName state is for applying styles to the button.
  // The isSignedIn state is for toggling the button text.
  const [buttonClassName, _setButtonClassName] = useState('');
  const [isSignedIn, _setIsSignedIn] = useState(false);

  return (
    <button
      onClick={handleAuth}
      className={buttonClassName.length == 0 ? 'auth-button' : buttonClassName}
    >
      {isSignedIn ? 'Sign Out' : 'Sign In'}
    </button>
  );
}
