// ./src/app/components/mainHeader.test.js
//
// Unit tests for MainHeader used for HomePage.

// Essential imports.
import { describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

// Local imports.
import MainHeader from './mainHeader';

describe('MainHeader', () => {
  it('renders without crashing', () => {
    const { container } = render(<MainHeader />);
    expect(container).toBeTruthy();
  });

  it('renders correct elements', () => {
    render(<MainHeader />);

    // Check for static elements (logo, search bar, and button.)
    expect(screen.getByAltText('event-feed-project logo')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search Events')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders a funcitoning signin/out button', () => {
    // Mock the toggleAuth function.
    const mockToggleAuth = jest.fn();
    render(<MainHeader toggleAuth={mockToggleAuth} />);

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
});
