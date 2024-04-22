// ./src/app/components/mainHeader.js
//
// MainHeader component for the HomePage.

import Image from 'next/image';
// Essential imports.
import React from 'react';

// Local imports.

export default function MainHeader({ authHandler }) {
  return (
    <header className="main-header">
      {/* Logo image. */}
      <Image
        src={logo}
        alt="event-feed-project logo"
        className="logo"
        width={150}
        height={150}
      />

      {/* Search bar. */}
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

      {/* Sign in/out button. */}
      <button
        onClick={toggleAuth}
        className={
          buttonClassName.length == 0 ? 'auth-button' : buttonClassName
        }
      >
        {isSignedIn ? 'Sign Out' : 'Sign In'}
      </button>
    </header>
  );
}
