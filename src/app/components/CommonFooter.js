// ./src/app/components/CommonFooter.js
//
// Footer component used across the application.

import Link from 'next/link';
// Essential imports.
import React from 'react';

// Local imports.

// Centralized definition of navigation links.
export const navigationLinks = [{ href: '/contact', label: 'Contact' }];

/**
 * @returns {React.ReactElement} Footer component.
 */
export default function CommonFooter() {
  return (
    <footer>
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
    </footer>
  );
}
