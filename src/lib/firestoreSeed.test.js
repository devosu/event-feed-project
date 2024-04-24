// ./src/firebase/firestoreSeed.test.js
//
// Unit tests for the Firestore seeding exports.

// Testing essential imports.
import { describe, expect, it } from '@jest/globals';

// Local imports.
import { deleteAllEvents, fetchAllEvents } from './firestoreCRUD';

import { sampleEventList, seedFirestore } from './firestoreSeed';

const TOTAL_LEN = 10;
describe('The sampleEventList', () => {
  it('exports an array of test event objects', () => {
    expect(sampleEventList).toBeInstanceOf(Array);
    expect(sampleEventList).toHaveLength(TOTAL_LEN);
  });

  it('exports test event objects with right keys', () => {
    sampleEventList.forEach((sampleEvent) => {
      expect(sampleEvent).toHaveProperty('eventImageURL');
      expect(sampleEvent).toHaveProperty('eventName');
      expect(sampleEvent).toHaveProperty('eventDate');
      expect(sampleEvent).toHaveProperty('eventLocation');
      expect(sampleEvent).toHaveProperty('clubIconURL');
      expect(sampleEvent).toHaveProperty('clubName');

      expect(sampleEvent).toHaveProperty('testID');
      expect(Object.keys(sampleEvent)).toHaveLength(7);
    });
  });

  it('exports test event objects with right values', () => {
    sampleEventList.forEach((sampleEvent) => {
      expect(sampleEvent.eventImageURL).toBeTruthy();
      expect(sampleEvent.eventName).toBeTruthy();
      expect(sampleEvent.eventDate).toBeTruthy();
      expect(sampleEvent.eventLocation).toBeTruthy();
      expect(sampleEvent.clubIconURL).toBeTruthy();
      expect(sampleEvent.clubName).toBeTruthy();

      expect(sampleEvent.testID).toBeTruthy();

      expect(typeof sampleEvent.eventImageURL).toBe('string');
      expect(typeof sampleEvent.eventName).toBe('string');
      expect(typeof sampleEvent.eventDate).toBe('string');
      expect(typeof sampleEvent.eventLocation).toBe('string');
      expect(typeof sampleEvent.clubIconURL).toBe('string');
      expect(typeof sampleEvent.clubName).toBe('string');

      expect(typeof sampleEvent.testID).toBe('string');
    });
  });
});

describe('The firestore seeding functions', () => {
  it('correctly seeds the Firestore database', async () => {
    try {
      // Seed the Firestore database with the sample event list.
      await seedFirestore(sampleEventList);

      // Expect the Firestore database to have the right number of events.
      const events = await fetchAllEvents();
      expect(events).toHaveLength(TOTAL_LEN);
    } catch (err) {
      throw new Error(`Seeding Firestore failed: ${err}`);
    }
  });
});
