// ./src/app/page.js
//
// Homepage for the event feed project.

// Essential imports.
import React from 'react';

// Local imports.
import MainHeader from '@components/MainHeader';
import EventGrid from '@components/EventGrid';
import './globals.css';

/**
 * @returns {JSX.Element} Homepage for the event feed project.
 */
export default function Homepage() {
  return (
    <main>
      <MainHeader />
      <EventGrid />
    </main>
  );
}
