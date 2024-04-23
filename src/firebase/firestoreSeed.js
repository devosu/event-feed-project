// ./src/firebase/fireseed.test.js
//
// Unit tests for the Firestore seeding exports.

// Testing essential imports.
import { describe, expect, it } from '@jest/globals';

// Local imports.
import { testEvents } from './firestoreSeed';

const TOTAL_LEN = 20;
describe('Firestore seeding exports', () => {
  it('exports an array of test events', () => {
    expect(testEvents).toBeInstanceOf(Array);
    expect(testEvents).toHaveLength(TOTAL_LEN);
  });

  it('exports test events with right keys', () => {
    testEvents.forEach((event) => {
      expect(event).toHaveProperty('event_name');
      expect(event).toHaveProperty('date');
      expect(event).toHaveProperty('location');
      expect(event).toHaveProperty('club_name');
    });
  });

  it('exports test events with right values', () => {
    testEvents.forEach((event) => {
      expect(event.event_name).toBeTruthy();
      expect(event.date).toBeTruthy();
      expect(event.location).toBeTruthy();
      expect(event.club_name).toBeTruthy();

      expect(typeof event.event_name).toBe('string');
      expect(typeof event.date).toBe('string');
      expect(typeof event.location).toBe('string');
      expect(typeof event.club_name).toBe('string');
    });
  });

  it('exports test events with unique values', () => {
    const uniqueNames = testEvents.map((event) => event.event_name);
    expect(new Set(uniqueNames).size).toBe(TOTAL_LEN);
  });
});
