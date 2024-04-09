import '../static/yakob.css';
import React from 'react';

/**
 * Health check component to check if the app is running.
 *
 * @returns {ReactElement} The React element.
 */
export default function Yakob() {
  //signIn and signOut functions
  const signIn = () => {
    //signIn code
  };

  const signOut = () => {
    //signOut code
  };

  return (
    <>
      <div className="main-header">
        <img
          src="/src/media/Logo.png"
          alt="event-feed-project logo"
          className="logo"
        />
        <nav>
          <ul>
            <li>
              {/* <a href="/home">Home</a> */}
              <a href="/">Home</a>
            </li>
            <li>
              {/* <a href="/groups">Groups</a> */}
              <a href="#">Groups</a>
            </li>
            <li>
              {/* <a href="/events">Events</a> */}
              <a href="#">Events</a>
            </li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button onClick={signIn}>Sign In</button>
          <button onClick={signOut}>Sign Out</button>
        </div>
      </div>
      <div className="sub-header">
        <div className="events-counter">Events ()</div>
        <div className="search-events">
          <input type="search" placeholder="Search Events" />
          <button>🔍</button>
        </div>
      </div>
    </>
  );
}
