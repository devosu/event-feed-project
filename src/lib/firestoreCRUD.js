// ./src/firebase/firestoreCRUD.js
//
// Firestore database operations.

// Third-party imports.
import { addDoc, collection } from 'firebase/firestore';

// Local imports.
import { db } from '@lib/firebaseInit';

export async function addEvent(newEvent) {
  console.log('beginning creation of document');

  // // Destructure the event object, provide defaults.
  // const {
  //   eventImageURL = '/images/default_event_image.png',
  //   eventName = 'Default Event Name',
  //   eventDate = 'Default Event Date',
  //   eventLocation = 'OSU Campus',
  //   clubIconURL = '/images/default_club_icon.png',
  //   clubName = 'Default Club Name',
  // } = newEvent;

  try {
    const eventsRef = collection(db, 'events');
    const docRef = await addDoc(eventsRef, newEvent);

    console.log('event added successfully.');
    // Return the auto-generated ID of the event.
    return docRef.id;
  } catch (err) {
    // Gracefully handle error adding the event fails.
    console.log('There was an error adding the document');
    console.error(`Error adding document: ${err}`);
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
