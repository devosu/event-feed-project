// ./src/app/components/authButton.js
//
// AuthButton component for the MainHeader.
'use client';

// Essential imports.
import React, { useState } from 'react';

export function AuthButtonUI({
  onClickHandler,
  displayText,
  displayStyle,
  isDisabled,
}) {
  return (
    <button
      onClick={onClickHandler}
      className={displayStyle}
      disabled={isDisabled}
    >
      {displayText}
    </button>
  );
}

export const buttonTexts = {
  haventSignedIn: 'Sign In',
  loading: 'Loading...',
  signedIn: 'Sign Out',
};

export const buttonStyles = {
  haventSignedIn: 'auth-button',
  loading: 'auth-button loading',
  signedIn: 'auth-button signed-in',
};

export function createAuthButtonOnClickHandler(
  [buttonState, setButtonState],
  authHandler,
) {
  return async () => {
    // Try to sign in, gracefully output result or handle error.
    if (buttonState === 'haventSignedIn') {
      try {
        setButtonState('loading');
        const authResult = await authHandler.signIn();
        setButtonState('signedIn');

        // Remove in production.
        console.log('Sign in auth result: ', authResult);
      } catch (err) {
        setButtonState('haventSignedIn');
        console.error(err);
      }

      // Try to sign out, gracefully output result or handle error.
    } else if (buttonState === 'signedIn') {
      try {
        setButtonState('loading');
        const authResult = await authHandler.signOut();
        setButtonState('haventSignedIn');

        // Remove in production.
        console.log('Sign out auth result: ', authResult);
      } catch (err) {
        setButtonState('signedIn');
        console.error(err);
      }
    } // If button state is loading, keep waiting for async.
  };
}

export default function AuthButton({ authHandler }) {
  // Define states, onClick handler, and render the UI.
  const [buttonState, setButtonState] = useState('haventSignedIn');
  const onClickHandler = createAuthButtonOnClickHandler(
    [buttonState, setButtonState],
    authHandler
  );
  return (
    <AuthButtonUI
      onClickHandler={onClickHandler}
      displayText={buttonTexts[buttonState]}
      displayStyle={buttonStyles[buttonState]}
      isDisabled={buttonState === 'loading'}
    />
  );
}
