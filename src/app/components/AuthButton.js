// ./src/app/components/authButton.js
//
// AuthButton component for the MainHeader.
'use client';

// Essential imports.
import React, { useState, useCallback } from 'react';

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

export default function AuthButton({ authHandler }) {
  // Define states, onClick handler, and render the UI.
  const [buttonState, setButtonState] = useState('haventSignedIn');

  const onClickHandler = useCallback(async () => {
    // Destructure the signInHandler and signOutHandler
    // from the authHandler prop.
    const { signInHandler, signOutHandler } = authHandler;
    if (buttonState === 'haventSignedIn') {
      try {
        // Start the sign-in process by first
        // transitioning to the loading state.
        setButtonState('loading');
        const authResult = await signInHandler();
        setButtonState('signedIn');

        // TODO: remove for production.
        console.log('Sign in auth result: ', authResult);
      } catch (err) {
        // Gracefully handle error by maintaining the not-signed-in state.
        setButtonState('haventSignedIn');
        console.error(err);
      }
    } else if (buttonState === 'signedIn') {
      try {
        // Start the sign-out process by first
        // transitioning to the loading state.
        setButtonState('loading');
        const authResult = await signOutHandler();
        setButtonState('haventSignedIn');

        // TODO: remove for production.
        console.log('Sign out auth result: ', authResult);
      } catch (err) {
        // Gracefully handle error by maintaining the signed-in state.
        setButtonState('signedIn');
        console.error(err);
      }
    }
    // Do nothing if buttonState is 'loading'.
  }, [buttonState, authHandler]);

  return (
    <AuthButtonUI
      onClickHandler={onClickHandler}
      displayText={buttonTexts[buttonState]}
      displayStyle={buttonStyles[buttonState]}
      isDisabled={buttonState === 'loading'}
    />
  );
}
