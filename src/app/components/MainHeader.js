// ./src/app/components/MainHeader.js
//
// MainHeader component for the HomePage.

// Essential imports.
import Image from 'next/image';
import React from 'react';

// Local imports.
import AuthButton from '@components/AuthButton';
import SearchBar from '@components/SearchBar';
import { signInHandler, signOutHandler } from '@lib/firebaseAuth';

export default function MainHeader() {
  const authHandler = {
    signInHandler,
    signOutHandler,
  };

  return (
    <header className="main-header">
      <Image
        src="/images/main_header_logo.png"
        alt="event-feed-project logo"
        className="logo"
        width={150}
        height={150}
      />
      <SearchBar />
      <AuthButton authHandler={authHandler} />
    </header>
  );
}
