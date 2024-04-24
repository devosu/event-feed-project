// ./src/app/components/EventCard.test.js
//
// Test case for EventCard component.

// Essential imports.
import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import React from 'react';

// Local imports.
import EventCard from './EventCard';

// Routine test event with all properties well-defined.
const testEvent0 = {
  eventImageURL: '/images/default_event_image.png',
  eventName: 'Test Event',
  eventDate: 'Test Date',
  eventLocation: 'Test Location',
  clubIconURL: '/images/default_club_icon.png',
  clubName: 'Test Club',
};

// Omitting but name and location to test default rendering.
const testEvent1 = {
  eventName: 'Broken Event',
  eventLocation: 'Somewhere',
};

// Omitting everything to test default rendering.
const testEvent2 = {
  // No keys.
};

describe('EventCard component', () => {
  it('renders without crashing when all properties defined', () => {
    const { container } = render(<EventCard event={testEvent0} />);
    expect(container).toBeTruthy();
  });

  it('renders without crashing when some properties omitted', () => {
    const { container } = render(<EventCard event={testEvent1} />);
    expect(container).toBeTruthy();
  });

  it('renders without crashing when all properties omitted', () => {
    const { container } = render(<EventCard event={testEvent2} />);
    expect(container).toBeTruthy();
  });

  it('renders correct elements when all properties defined', () => {
    render(<EventCard event={testEvent0} />);

    // Check for static renderings: image, heading, date, location, icon, and name.
    expect(screen.getByAltText('Event Image Here')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText(/^Test Date.* @ Time$/)).toBeInTheDocument();
    expect(screen.getByText('Test Location')).toBeInTheDocument();
    expect(screen.getByAltText('Club Icon Here')).toBeInTheDocument();
    expect(screen.getByText('Test Club')).toBeInTheDocument();
  });

  it('renders correct elements when some properties omitted', () => {
    render(<EventCard event={testEvent1} />);

    // Check for static renderings: image, heading, date, location, icon, and name.
    expect(screen.getByAltText('Event Image Here')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(
      screen.getByText(/^Default Event Date.* @ Time$/)
    ).toBeInTheDocument();
    expect(screen.getByText('Somewhere')).toBeInTheDocument();
    expect(screen.getByAltText('Club Icon Here')).toBeInTheDocument();
    expect(screen.getByText('Default Club Name')).toBeInTheDocument();
  });

  it('renders correct elements when all properties omitted', () => {
    render(<EventCard event={testEvent2} />);

    // Check for static renderings: image, heading, date, location, icon, and name.
    expect(screen.getByAltText('Event Image Here')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(
      screen.getByText(/^Default Event Date.* @ Time$/)
    ).toBeInTheDocument();
    expect(screen.getByText('OSU Campus')).toBeInTheDocument();
    expect(screen.getByAltText('Club Icon Here')).toBeInTheDocument();
    expect(screen.getByText('Default Club Name')).toBeInTheDocument();
  });
});
