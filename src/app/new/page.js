// ./src/new/page.js
//
// New event creation page at url '/new'.

// Next essential imports.
import React from 'react';

import CommonFooter from '@components/CommonFooter';
// Local imports.
import CommonHeader from '@components/CommonHeader';
import EventForm from '@components/EventForm';
import './new.css';

export default function CreatNewEvent() {
  return (
    <main>
      <CommonHeader />
      <EventForm />
      <CommonFooter />
    </main>
  );
}
