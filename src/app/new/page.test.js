// ./src/create/page.test.js
//
// Integration tests for the create new event page.

// Testing essential imports.
import { describe, expect, it, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';

// Next essential imports.
import React from 'react';

// Mock components imported by /new page,
// including the CommonHeader, EventForm, and CommonFooter.
jest.mock('@components/CommonHeader', () => {
  return function CommonHeader() {
    return <div data-testid="mock-common-header" />;
  };
});

jest.mock('@components/EventForm', () => {
  return function EventForm() {
    return <div data-testid="mock-event-form" />;
  };
});

jest.mock('@components/CommonFooter', () => {
  return function CommonFooter() {
    return <div data-testid="mock-common-footer" />;
  };
});

// Isolate CreateNewEvent page/component for testing.
describe('CreateNewEvent page/component', () => {
  it('renders CommonHeader, EventForm, and CommonFooter', () => {
    jest.isolateModules(() => {
      const CreateNewEvent = require('./page').default;
      render(<CreateNewEvent />);
      expect(screen.getByTestId('mock-common-header')).toBeInTheDocument();
      expect(screen.getByTestId('mock-event-form')).toBeInTheDocument();
      expect(screen.getByTestId('mock-common-footer')).toBeInTheDocument();
    });
  });
});
