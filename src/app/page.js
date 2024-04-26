// ./src/app/page.js
//
// Homepage for the event feed project.

// Essential imports.
import React from 'react';

import EventGrid from '@components/EventGrid';
import MainHeader from '@components/MainHeader';
// Local imports.
import { signInHandler, signOutHandler } from '@lib/firebaseAuth';
import './globals.css';

/**
 * @returns {React.ReactElement} Homepage for the event feed project.
 */
export default function Homepage() {
  const authHandler = {
    signInHandler: signInHandler,
    signOutHandler: signOutHandler,
  };
  return (
    <main>
      <MainHeader authHandler={authHandler} />
      <EventGrid />
    </main>
  );
}
