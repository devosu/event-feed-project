// ./src/app/page.test.js
//
// Unit tests for Homepage.

// Essential imports.
import { describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

// Page imports.
import Homepage from './page';

describe('Homepage', () => {
  it('renders without crashing', () => {
    const { container } = render(<Homepage />);
    expect(container).toBeTruthy();
  });

  it('renders correct static fields', () => {
    render(<Homepage />);

    // Check for static elements (logo, search bar, and events.)
    expect(screen.getByAltText('event-feed-project logo')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search Events')).toBeInTheDocument();
    expect(screen.getByRole('grid')).toBeInTheDocument();
  });

  it('renders correct signin/out button', () => {
    // Mock the toggleAuth function.
    const mockToggleAuth = jest.fn();
    render(<Homepage toggleAuth={mockToggleAuth} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Sign In');

    // Test button click.
    fireEvent.click(button);
    expect(mockToggleAuth).toHaveBeenCalledTimes(1);
    expect(button).toHaveTextContent('Sign Out');

    // Test button click again.
    fireEvent.click(button);
    expect(mockToggleAuth).toHaveBeenCalledTimes(2);
    expect(button).toHaveTextContent('Sign In');
  });

  // it('renders correct dynamic fields', () => {
  //   render(<Homepage />);

  //   // Tests for event cards here.
  // });
});

// Add more tests as project progresses.
