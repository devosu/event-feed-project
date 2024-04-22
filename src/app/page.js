// ./src/app/page.js
//
// Homepage for the event feed project.
'use client';

import { Inter } from 'next/font/google';
// Next essential imports.
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

// Third-party imports.
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import 'material-symbols/rounded.css';

// Local imports.
import logo from '@app/logo.png';
import EventCard from '@components/eventCard';
import { db } from '@firebase/firebase';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

/**
 * @returns {JSX.Element} Homepage for the event feed project.
 */
export default function Homepage() {
  const [events, setEvents] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [inputClassName, setClassName] = useState('');
  const [buttonClassName, setButtonClassName] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);

  const toggleAuth = () => {
    if (isSignedIn) {
      // Replace with your sign out logic
    } else {
      // Replace with your sign in logic
    }
    setIsSignedIn(!isSignedIn);
  };

  useEffect(() => {
    setClassName(`event-search ${inter.className}`);
    setButtonClassName(`auth-button ${inter.className}`);
    getEvents();
  }, [events]);

  // https://firebase.google.com/docs/firestore/query-data/order-limit-data

  const getEvents = () => {
    const renderedComponents = [];
    getDocs(query(collection(db, 'events'), orderBy('date', 'asc'))).then(
      (q) => {
        q.forEach((doc) => {
          renderedComponents.push(
            <EventCard
              eventName={doc.data().event_name}
              date={doc.data().date}
              location={doc.data().location}
              clubName={doc.data().club_name}
            />
          );
        });
        if (!loaded) setEvents(renderedComponents);
        setLoaded(true);
      }
    );
  };

  return (
    <main>
      <div className="main-header">
        {/* Replace with your logo */}
        <Image
          src={logo}
          alt="event-feed-project logo"
          className="logo"
          width={150}
          height={150}
        />

        <div className="input-container">
          <span className="material-symbols-rounded search-icon">search</span>
          <input
            type="text"
            className={
              inputClassName.length == 0 ? 'event-search' : inputClassName
            }
            placeholder="Search Events"
          ></input>
        </div>

        <button
          onClick={toggleAuth}
          className={
            buttonClassName.length == 0 ? 'auth-button' : buttonClassName
          }
        >
          {isSignedIn ? 'Sign Out' : 'Sign In'}
        </button>
      </div>

      {/* Latest events are rendered in a grid here. */}
      <div className="events-grid">{events}</div>
    </main>
  );
}
