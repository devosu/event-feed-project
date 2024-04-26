// ./src/app/components/CommonHeader.js
//
// Header component used across the application.

import Link from 'next/link';
// Essential imports.
import React from 'react';

// Local imports.

// Centralized definition of navigation links.
export const navigationLinks = [{ href: '/', label: 'Home' }];

/**
 * @returns {React.ReactElement} Header component.
 */
export default function CommonHeader() {
  return (
    <header>
      <nav>
        <ul>
          {/* Dynamically render navigation links. */}
          {navigationLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
