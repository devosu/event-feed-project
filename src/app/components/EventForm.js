import React from 'react';

import { addEvent } from '@lib/firestoreCRUD';

/**
 * @returns {JSX.Element} the create event page.
 */
export default function EventForm() {
  return (
    <form>
      <input type="text" id="event" placeholder="Event"></input>
      <input type="date" id="date" data-testid="date-input"></input>
      <input type="text" id="location" placeholder="Location"></input>
      <input type="text" id="club" placeholder="Club Name"></input>
      <button onClick={() => addEvent()}>Submit</button>
    </form>
  );
}
