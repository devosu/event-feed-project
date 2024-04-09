// ./src/pages/App.test.js
//
// Unit tests for the App page.

// React essential imports.
import React from 'react';
import { render } from '@testing-library/react';

// Page imports.
import App from './App';

test('App renders without crashing', () => {
  const { container } = render(<App />);
  expect(container).toBeTruthy();
});

// Add more tests as project progresses.
// For example, test that the correct components
// are rendered for each route.
