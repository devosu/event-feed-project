// ./src/app/components/MainHeader.js
//
// MainHeader component for the HomePage.
'use client';

import Image from 'next/image';
// Essential imports.
import Link from 'next/link';
import React from 'react';

// Local imports.
import AuthButton from '@components/AuthButton';
import SearchBar from '@components/SearchBar';

export default function MainHeader({ authHandler }) {
  return (
    <header className="main-header">
      <Link href="/">
        <Image
          src="/images/main_header_logo.png"
          alt="event-feed-project logo"
          className="logo"
          width={150}
          height={150}
        />
      </Link>
      <SearchBar />
      <AuthButton authHandler={authHandler} />
    </header>
  );
}
