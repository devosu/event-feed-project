// ./src/app/components/mainHeader.js
//
// MainHeader component for the HomePage.

// Essential imports.
import React from 'react';
import Image from 'next/image';

// Local imports.
import * as Auth from '@firebase/firebaseAuth'
import SearchBar from '@components/SearchBar';
import AuthButton from '@components/AuthButton';

export default function MainHeader() {
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
      <AuthButton authHandler={Auth} />
    </header>
  );
}
