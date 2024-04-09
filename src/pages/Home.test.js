// ./src/pages/Home.test.js
//
// Unit tests for the Home page.

// React essential imports.
import React from 'react';
import { render, screen } from '@testing-library/react';

// Page imports.
import Home from './Home';

test('Home renders without crashing', () => {
  const { container } = render(<Home />);
  expect(container).toBeTruthy();
});

test('Home renders correct text', () => {
  render(<Home />);
  expect(screen.getByText('Welcome to home page for event feed!')).toBeTruthy();
  expect(screen.getByText("Go to Yakob's Page")).toBeTruthy();
  expect(screen.getByText("Go to Ziqi's Page")).toBeTruthy();
});

test('Home renders correct links', () => {
  render(<Home />);
  expect(screen.getByText("Go to Yakob's Page").href).toContain('/yakob');
  expect(screen.getByText("Go to Ziqi's Page").href).toContain('/ziqi');
});

// Add more tests as project progresses.
