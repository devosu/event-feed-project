// ./src/app/components/EventCard.js
//
// Single event card component for the event grid.

// Essential imports.
import Image from 'next/image';
import React from 'react';

// Local imports.
import './EventCard.css';

export default function EventCard({ event }) {
  // Destructure the event object for easier access to its properties
  const {
    eventImageURL = '/images/default_event_image.png',
    eventName = 'Default Event Name',
    eventDate = 'Default Event Date',
    eventLocation = 'OSU Campus',
    clubIconURL = '/images/default_club_icon.png',
    clubName = 'Default Club Name',
  } = event;

  return (
    <div className="event-card">
      {/* Image (poster/flyer) of the event. */}
      <Image
        src={eventImageURL}
        alt="Event Image Here"
        className="event-image"
        width={200}
        height={200}
      />

      {/* Basic information about the event. */}
      <div className="basic-information-block">
        <h1>{eventName}</h1>
        <p>{eventDate} @ Time</p>
        <p>{eventLocation}</p>
      </div>

      {/* Organization block with the club icon and name. */}
      <div className="organization-block">
        <Image
          src={clubIconURL}
          alt="Club Icon Here"
          className="club-icon"
          width={50}
          height={50}
        />
        <p>{clubName}</p>
      </div>
    </div>
  );
}
