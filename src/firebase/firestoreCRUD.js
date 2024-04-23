// ./src/firebase/firestore.js
//
// Firestore database operations.

// Third-party imports.
import { addDoc, collection } from 'firebase/firestore';

// Local imports.
import { db } from './firebaseInit';

/**
 * Add an event to the Firestore database.
 *
 * @param {Object} eventData - name, date, location, and club name of the event.
 */
export async function addEvent(eventData) {
  console.log('beginning creation of document');
  try {
    const eventsRef = collection(db, 'events');
    const docRef = await addDoc(eventsRef, eventData);
    console.log('event added successfully.');
    // Return the auto-generated ID of the event.
    return docRef.id;

    // Gracefully handle error adding the event fails.
  } catch (e) {
    console.log('There was an error adding the document');
    console.error(`Error adding document: ${e}`);
  }
}

/**
 * Fetch all events from the Firestore database.
 */
export async function fetchAllEvents() {
  // Placeholder for fetching all events.
}

/**
 * Fetch a specific event from the Firestore database.
 *
 * @param {string} TODO
 */
export async function fetchEvent() {
  // Placeholder for fetching a specific event.
}

/**
 * Update an event in the Firestore database.
 *
 * @param {string} TODO
 */
export async function updateEvent() {
  // Placeholder for updating an event.
}

/**
 * Delete an event from the Firestore database.
 *
 * @param {string} TODO
 */
export async function deleteEvent() {
  // Placeholder for deleting an event.
}

/**
 * Delete all events from the Firestore database.
 */
export async function deleteAllEvents() {
  // Placeholder for deleting all events.
}

/**
 * Seed the Firestore database with test events.
 */
export async function seedEvents() {
  // Placeholder for seeding the database with test events.
}
