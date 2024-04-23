// ./src/app/components/authButton.test.js
//
// Unit tests for AuthButton used for MainHeader.

// Essential imports.
import { describe, expect, it, jest, beforeEach } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

// Local imports.
import AuthButton, {
  createAuthButtonOnClickHandler,
  AuthButtonUI,
  buttonStyles,
  buttonTexts,
} from './AuthButton';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('onClick builder for the AuthButton component', () => {
  const mockAuthHandler = {
    signIn: jest.fn().mockResolvedValue('mockSignInResolve'),
    signOut: jest.fn().mockResolvedValue('mockSignOutResolve'),
  };

  it('creates an onClick handler for the AuthButton', async () => {
    const [buttonState, setButtonState] = ['haventSignedIn', jest.fn()];
    const onClickHandler = createAuthButtonOnClickHandler(
      [buttonState, setButtonState],
      mockAuthHandler
    );

    expect(onClickHandler).toBeInstanceOf(Function);
  });

  it('handles the sign in functionality', async () => {
    const [buttonState, setButtonState] = ['haventSignedIn', jest.fn()];
    const onClickHandler = createAuthButtonOnClickHandler(
      [buttonState, setButtonState],
      mockAuthHandler
    );

    // Test the sign in functionality.
    await onClickHandler();
    expect(setButtonState).toHaveBeenCalledWith('loading');
    expect(mockAuthHandler.signIn).toHaveBeenCalled();
    expect(setButtonState).toHaveBeenCalledWith('signedIn');
  });

  it('handles the sign out functionality', async () => {
    const [buttonState, setButtonState] = ['signedIn', jest.fn()];
    const onClickHandler = createAuthButtonOnClickHandler(
      [buttonState, setButtonState],
      mockAuthHandler
    );

    // Test the sign out functionality.
    await onClickHandler();
    expect(setButtonState).toHaveBeenCalledWith('loading');
    expect(mockAuthHandler.signOut).toHaveBeenCalled();
    expect(setButtonState).toHaveBeenCalledWith('haventSignedIn');
  });

  it('handles errors when signing in', async () => {
    const [buttonState, setButtonState] = ['haventSignedIn', jest.fn()];
    const onClickHandler = createAuthButtonOnClickHandler(
      [buttonState, setButtonState],
      mockAuthHandler
    );

    mockAuthHandler.signIn.mockRejectedValueOnce('mockSignInReject');
    await onClickHandler();
    expect(mockAuthHandler.signIn).toHaveBeenCalled();
    expect(setButtonState).toHaveBeenCalledWith('haventSignedIn');
  });

  it('handles errors when signing out', async () => {
    const [buttonState, setButtonState] = ['signedIn', jest.fn()];
    const onClickHandler = createAuthButtonOnClickHandler(
      [buttonState, setButtonState],
      mockAuthHandler
    );

    mockAuthHandler.signOut.mockRejectedValueOnce('mockSignOutReject');
    await onClickHandler();
    expect(mockAuthHandler.signOut).toHaveBeenCalled();
    expect(setButtonState).toHaveBeenCalledWith('signedIn');
  });

  it('does nothing when the button is in the loading state', async () => {
    const [buttonState, setButtonState] = ['loading', jest.fn()];
    const onClickHandler = createAuthButtonOnClickHandler(
      [buttonState, setButtonState],
      mockAuthHandler
    );

    await onClickHandler();
    expect(mockAuthHandler.signIn).not.toHaveBeenCalled();
    expect(mockAuthHandler.signOut).not.toHaveBeenCalled();
    expect(setButtonState).not.toHaveBeenCalled();
  });
});

describe('UI for the AuthButton component', () => {
  it('renders the AuthButton component', () => {
    render(
      <AuthButtonUI
        onClickHandler={() => { }}
        displayText="Test Button"
        displayStyle="test-button"
        isDisabled={false}
      />
    );
    const button = screen.getByText('Test Button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('test-button');
    expect(button).not.toBeDisabled();
  });
});

describe('Text and style options for the AuthButton component', () => {
  it('has the correct text and style options', () => {
    expect(buttonTexts).toHaveProperty('haventSignedIn');
    expect(buttonTexts).toHaveProperty('loading');
    expect(buttonTexts).toHaveProperty('signedIn');
    expect(buttonStyles).toHaveProperty('haventSignedIn');
    expect(buttonStyles).toHaveProperty('loading');
    expect(buttonStyles).toHaveProperty('signedIn');
  });
});

describe('Functionality for the AuthButton component', () => {
  const mockAuthHandler = {
    signIn: jest.fn().mockResolvedValue('mockSignInResolve'),
    signOut: jest.fn().mockResolvedValue('mockSignOutResolve'),
  };

  it('signs in when the button is clicked', async () => {
    render(<AuthButton authHandler={mockAuthHandler} />);
    const button = screen.getByText(buttonTexts.haventSignedIn);

    fireEvent.click(button);
    expect(button).toHaveTextContent(buttonTexts.loading);
    expect(button).toBeDisabled();
    expect(await screen.findByText(buttonTexts.signedIn)).toBeInTheDocument();
  });

  it('signs out when the button is clicked', async () => {
    render(<AuthButton authHandler={mockAuthHandler} />);
    const button = screen.getByText(buttonTexts.haventSignedIn);

    fireEvent.click(button);
    expect(button).toHaveTextContent(buttonTexts.loading);
    expect(button).toBeDisabled();
    expect(await screen.findByText(buttonTexts.signedIn)).toBeInTheDocument();

    fireEvent.click(screen.getByText(buttonTexts.signedIn));
    expect(button).toHaveTextContent(buttonTexts.loading);
    expect(button).toBeDisabled();
    expect(await screen.findByText(buttonTexts.haventSignedIn)).toBeInTheDocument();
  });
});
