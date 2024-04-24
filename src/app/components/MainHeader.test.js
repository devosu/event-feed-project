// ./src/app/components/mainHeader.test.js
//
// Integration for MainHeader used for HomePage.

// Essential imports.
import { beforeAll, describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

// Mock the '@firebase/firebaseAuth' module
// overriding the MainHeader import.
const mockSignInHandler = jest.fn().mockResolvedValue('mockSignInResolve');
const mockSignOutHandler = jest.fn().mockResolvedValue('mockSignOutResolve');
jest.mock('@lib/firebaseAuth', () => ({
  signInHandler: mockSignInHandler,
  signOutHandler: mockSignOutHandler,
}));

beforeAll(() => {
  jest.clearAllMocks();
});

describe('MainHeader', () => {
  it('renders without crashing', () => {
    jest.isolateModules(() => {
      const MainHeader = require('./MainHeader').default;
      const _AuthButton = require('./AuthButton').default;
      const _SearchBar = require('./SearchBar').default;

      const { container } = render(<MainHeader />);

      expect(container).toBeTruthy();
    });
  });

  it('renders correct elements', () => {
    jest.isolateModules(() => {
      const MainHeader = require('./MainHeader').default;
      const _AuthButton = require('./AuthButton').default;
      const _SearchBar = require('./SearchBar').default;

      render(<MainHeader />);

      // Check for static elements (logo, search bar, and button.)
      expect(
        screen.getByAltText('event-feed-project logo')
      ).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Search Events')).toBeInTheDocument();
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  it('renders a funcitoning signin/out button', () => {
    jest.isolateModulesAsync(async () => {
      const MainHeader = require('./MainHeader').default;
      const _AuthButton = require('./AuthButton').default;
      const _SearchBar = require('./SearchBar').default;

      render(<MainHeader />);

      const button = screen.getByRole('button');
      expect(button).toHaveTextContent('Sign In');

      // Test button click cycle.
      fireEvent.click(button);
      expect(button).toHaveTextContent('Loading...');
      expect(mockSignInHandler).toHaveBeenCalledTimes(1);
      expect(mockSignOutHandler).toHaveBeenCalledTimes(0);
      expect(await screen.findByRole('button')).toHaveTextContent('Sign Out');

      fireEvent.click(button);
      expect(button).toHaveTextContent('Loading...');
      expect(mockSignInHandler).toHaveBeenCalledTimes(1);
      expect(mockSignOutHandler).toHaveBeenCalledTimes(1);
      expect(await screen.findByRole('button')).toHaveTextContent('Sign In');

      fireEvent.click(button);
      expect(button).toHaveTextContent('Loading...');
      expect(mockSignInHandler).toHaveBeenCalledTimes(2);
      expect(mockSignOutHandler).toHaveBeenCalledTimes(1);
      expect(await screen.findByRole('button')).toHaveTextContent('Sign Out');
    });
  });

  // Test when auth error occurs.

  // Test search bar functionality.
});
