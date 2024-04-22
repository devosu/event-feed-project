// ./src/app/components/authButton.test.js
//
// Unit tests for AuthButton used for MainHeader.

// Essential imports.
import { describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

// Local imports.
import AuthButton from './authButton';

describe('AuthButton', () => {
  it('renders without crashing', () => {
    const { container } = render(<AuthButton />);
    expect(container).toBeTruthy();
  });

  it('renders as a button', () => {
    render(<AuthButton />);

    // Check for static elements (button.)
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders a funcitoning signin/out button', () => {
    // Mock the toggleAuth function.
    const mockHandleAuth = jest.fn();
    render(<AuthButton handleAuth={mockHandleAuth} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Sign In');

    // Test button click.
    fireEvent.click(button);
    expect(mockHandleAuth).toHaveBeenCalledTimes(1);
    expect(button).toHaveTextContent('Sign Out');

    // Test button click again.
    fireEvent.click(button);
    expect(mockHandleAuth).toHaveBeenCalledTimes(2);
    expect(button).toHaveTextContent('Sign In');
  });
});
