// ./src/app/components/EventGrid.js
//
// EventGrid component for the HomePage.

// Essential imports.
import React from 'react';

// Local imports.
import EventCard from '@components/EventCard';

export default function EventGrid({ events }) {
  return (
    <div className="event-grid">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
