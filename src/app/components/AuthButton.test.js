// ./src/app/components/AuthButton.test.js
//
// Unit and integration tests for AuthButton used for MainHeader.

// Essential imports.
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

// Local imports.
import AuthButton, {
  AuthButtonUI,
  buttonStyles,
  buttonTexts,
} from './AuthButton';

// Set up mock for actual firebaseAuth module.
jest.mock('@lib/firebaseAuth', () => ({
  signInHandler: jest.fn().mockResolvedValue('mockSignInResolve'),
  signOutHandler: jest.fn().mockResolvedValue('mockSignOutResolve'),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

// describe('onClick builder for the AuthButton component', () => {
//   it('creates an onClick handler for the AuthButton', () => {
//     jest.isolateModules(() => {
//       const mockAuthHandler = require('@lib/firebaseAuth');

//       const [buttonState, setButtonState] = ['haventSignedIn', jest.fn()];
//       const onClickHandler = createAuthButtonOnClickHandler(
//         [buttonState, setButtonState],
//         mockAuthHandler
//       );

//       // Confirm onClick is built correctly.
//       expect(onClickHandler).toBeInstanceOf(Function);
//     });
//   });

//   it('handles the sign in functionality', () => {
//     jest.isolateModulesAsync(async () => {
//       const mockAuthHandler = require('@lib/firebaseAuth');

//       const [buttonState, setButtonState] = ['haventSignedIn', jest.fn()];
//       const onClickHandler = createAuthButtonOnClickHandler(
//         [buttonState, setButtonState],
//         mockAuthHandler
//       );

//       // Test the sign in functionality.
//       await onClickHandler();
//       expect(setButtonState).toHaveBeenCalledWith('loading');
//       expect(mockAuthHandler.signInHandler).toHaveBeenCalled();
//       expect(mockAuthHandler.signOutHandler).not.toHaveBeenCalled();
//       expect(setButtonState).toHaveBeenCalledWith('signedIn');
//     });
//   });

//   it('handles the sign out functionality', () => {
//     jest.isolateModulesAsync(async () => {
//       const mockAuthHandler = require('@lib/firebaseAuth');

//       const [buttonState, setButtonState] = ['signedIn', jest.fn()];
//       const onClickHandler = createAuthButtonOnClickHandler(
//         [buttonState, setButtonState],
//         mockAuthHandler
//       );

//       // Test the sign out functionality.
//       await onClickHandler();
//       expect(setButtonState).toHaveBeenCalledWith('loading');
//       expect(mockAuthHandler.signOutHandler).toHaveBeenCalled();
//       expect(mockAuthHandler.signInHandler).not.toHaveBeenCalled();
//       expect(setButtonState).toHaveBeenCalledWith('haventSignedIn');
//     });
//   });

//   it('handles errors when signing in', () => {
//     jest.isolateModulesAsync(async () => {
//       const mockAuthHandler = require('@lib/firebaseAuth');

//       const [buttonState, setButtonState] = ['haventSignedIn', jest.fn()];
//       const onClickHandler = createAuthButtonOnClickHandler(
//         [buttonState, setButtonState],
//         mockAuthHandler
//       );

//       mockAuthHandler.signInHandler.mockRejectedValueOnce('mockSignInReject');
//       await onClickHandler();
//       expect(mockAuthHandler.signInHandler).toHaveBeenCalled();
//       expect(mockAuthHandler.signOutHandler).not.toHaveBeenCalled();
//       expect(setButtonState).toHaveBeenCalledWith('haventSignedIn');
//     });
//   });

//   it('handles errors when signing out', () => {
//     jest.isolateModulesAsync(async () => {
//       const mockAuthHandler = require('@lib/firebaseAuth');

//       const [buttonState, setButtonState] = ['signedIn', jest.fn()];
//       const onClickHandler = createAuthButtonOnClickHandler(
//         [buttonState, setButtonState],
//         mockAuthHandler
//       );

//       mockAuthHandler.signOutHandler.mockRejectedValueOnce('mockSignOutReject');
//       await onClickHandler();
//       expect(mockAuthHandler.signOutHandler).toHaveBeenCalled();
//       expect(mockAuthHandler.signInHandler).not.toHaveBeenCalled();
//       expect(setButtonState).toHaveBeenCalledWith('signedIn');
//     });
//   });

//   it('does nothing when the button is in the loading state', () => {
//     jest.isolateModulesAsync(async () => {
//       const mockAuthHandler = require('@lib/firebaseAuth');

//       const [buttonState, setButtonState] = ['loading', jest.fn()];
//       const onClickHandler = createAuthButtonOnClickHandler(
//         [buttonState, setButtonState],
//         mockAuthHandler
//       );

//       await onClickHandler();
//       expect(mockAuthHandler.signInHandler).not.toHaveBeenCalled();
//       expect(mockAuthHandler.signOutHandler).not.toHaveBeenCalled();
//       expect(setButtonState).not.toHaveBeenCalled();
//     });
//   });
// });

describe('UI for the AuthButton component', () => {
  it('renders the AuthButton component', () => {
    render(
      <AuthButtonUI
        onClickHandler={jest.fn()}
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
  it('cycles through sign in and out', () => {
    jest.isolateModulesAsync(async () => {
      const mockAuthHandler = require('@lib/firebaseAuth');

      render(<AuthButton authHandler={mockAuthHandler} />);
      const button = screen.getByText(buttonTexts.haventSignedIn);

      fireEvent.click(button);
      expect(button).toHaveTextContent(buttonTexts.loading);
      expect(button).toBeDisabled();
      expect(await screen.findByText(buttonTexts.signedIn)).toBeInTheDocument();

      fireEvent.click(screen.getByText(buttonTexts.signedIn));
      expect(button).toHaveTextContent(buttonTexts.loading);
      expect(button).toBeDisabled();
      expect(
        await screen.findByText(buttonTexts.haventSignedIn)
      ).toBeInTheDocument();

      fireEvent.click(screen.getByText(buttonTexts.haventSignedIn));
      expect(button).toHaveTextContent(buttonTexts.loading);
      expect(button).toBeDisabled();
      expect(await screen.findByText(buttonTexts.signedIn)).toBeInTheDocument();
    });
  });
});
