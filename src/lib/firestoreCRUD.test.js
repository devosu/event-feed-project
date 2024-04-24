// ./src/firebase/firestoreCRUD.test.js
//
// Unit tests for Firestore database op functions.

// Essential imports.
import { describe, expect, it } from '@jest/globals';
import { doc, getDoc } from 'firebase/firestore';

// Firestore connection import.
import { db } from './firebaseInit';

// Testing module imports.
import { addEvent } from './firestoreCRUD';

describe('Firestore database operations', () => {
  // Set up test event data for CRUD operations.
  const dateId = new Date().toISOString();
  const testEvent = {
    event_name: `Test Event on ${dateId}`,
    date: dateId,
    location: 'Test Location',
    club_name: 'Test Club',
  };

  it('correctly adds an event to the database', async () => {
    try {
      const docRefId = await addEvent(
        testEvent.event_name,
        testEvent.date,
        testEvent.location,
        testEvent.club_name
      );
      expect(docRefId).toBeTruthy();

      // Expect the right event to be added successfully,
      // by fetching the specific event from the database.
      const checkRef = doc(db, 'events', docRefId);
      const checkEvent = await getDoc(checkRef);
      expect(checkEvent).toEqual(testEvent);

      // Gracefully fail the test if adding the event fails.
    } catch (e) {
      throw new Error(`Adding event failed: ${e}`);
    }
  });

  // it('correctly fetches events from the database', () => {
  //   const events = fetchEvents();

  //   // Expect...
  //   expect();
  // });

  // it('correctly deletes an event from the database', () => {
  //   const result = deleteEvent(eventId);

  //   // Expect the result to be successful.
  //   expect(result).toBe(true);
  // });
});
