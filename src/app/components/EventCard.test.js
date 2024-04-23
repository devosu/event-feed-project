// ./src/app/components/EventCard.test.js
//
// Test case for EventCard component.

// Essential imports.
import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import React from 'react';

// Local imports.
import EventCard from './EventCard';

const testEvent = {
  eventImageURL: null,
  eventName: 'Test Event',
  eventDate: 'Test Date',
  eventLocation: 'Test Location',
  clubIconURL: null,
  clubName: 'Test Club',
};

describe('EventCard component', () => {
  it('renders without crashing', () => {
    const { contianer } = render(<EventCard event={testEvent} />);
    expect(contianer).toBeTruthy();
  });

  it('renders correct elements', () => {
    render(<EventCard event={testEvent} />);

    // Check for static renderings: image, heading, date, location, icon, and name.
    expect(screen.getByAltText('Event Image Here')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText(' @ Time')).toBeInTheDocument();
    expect(screen.getByText('Test Location')).toBeInTheDocument();
    expect(screen.getByAltText('Club Icon Here')).toBeInTheDocument();
    expect(screen.getByText('Test Club')).toBeInTheDocument();
  });
});
