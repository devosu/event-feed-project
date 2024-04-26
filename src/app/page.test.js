// ./src/app/page.test.js
//
// Integration tests for the app HomePage.

// Testing essential imports.
import { signInHandler } from '@/lib/firebaseAuth';
import { describe, expect, it, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { auth } from 'firebase-admin';

// Mock components imported by /home page,
// including two auth handlers, MainHeader, and EventGrid.
const mockSignInHandler = jest.fn();
const mockSignOutHandler = jest.fn();
jest.mock('@lib/firebaseAuth', () => {
  return {
    signInHandler: mockSignInHandler,
    signOutHandler: mockSignOutHandler,
  };
});

jest.mock('@components/MainHeader', () => {
  return function MainHeader({ authHandler }) {
    return <div data-testid="mock-main-header" authHandler={authHandler} />;
  };
});

jest.mock('@components/EventGrid', () => {
  return function EventGrid() {
    return <div data-testid="mock-event-grid" />;
  };
});

// Isolate HomePage page/component for testing.
describe('HomePage page/component', () => {
  it('renders MainHeader and EventGrid', () => {
    jest.isolateModules(() => {
      const HomePage = require('./page').default;

      render(<HomePage />);

      const mainHeaderElement = screen.getByTestId('mock-main-header');
      expect(mainHeaderElement).toBeInTheDocument();

      expect(mainHeaderElement).toHaveProperty('authHandler');
      expect(mainHeaderElement.authHandler).toHaveProperty('signInHandler');
      expect(mainHeaderElement.authHandler.signInHandler).toBe(
        mockSignInHandler
      );
      expect(mainHeaderElement.authHandler).toHaveProperty('signOutHandler');
      expect(mainHeaderElement.authHandler.signOutHandler).toBe(
        mockSignOutHandler
      );

      expect(screen.getByTestId('mock-event-grid')).toBeInTheDocument();
    });
  });
});
