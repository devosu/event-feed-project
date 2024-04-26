// ./src/app/components/SearchBar.js
//
// SearchBar component for the MainHeader.

// Essential Imports.
import React from 'react';

// Third-party Imports.
import 'material-symbols/rounded.css';

/**
 * @returns {React.ReactElement} The SearchBar component.
 */
export default function SearchBar() {
  return (
    <div className="input-container">
      <span className="material-symbols-rounded search-icon">search</span>
      <input
        type="text"
        className="event-search"
        placeholder="Search Events"
      ></input>
    </div>
  );
}
