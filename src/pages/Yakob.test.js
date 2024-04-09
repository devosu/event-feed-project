// ./src/pages/Yakob.test.js
//
// Unit tests for the Yakob page.

// React essential imports.
import React from 'react';
import { render, screen } from '@testing-library/react';

// Page imports.
import Yakob from './Yakob';

test('Yakob renders without crashing', () => {
  const { container } = render(<Yakob />);
  expect(container).toBeTruthy();
});

test('Yakob renders correct components', () => {
  render(<Yakob />);

  expect(screen.getByRole('link', { name: /Home/i })).toBeTruthy();
  expect(screen.getByRole('link', { name: /Groups/i })).toBeTruthy();
  expect(screen.getByRole('link', { name: /Events/i })).toBeTruthy();

  expect(screen.getByRole('navigation')).toBeTruthy();
  expect(screen.getByRole('img')).toBeTruthy();
  expect(screen.getByRole('searchbox')).toBeTruthy();

  expect(screen.getByRole('button', { name: /Sign In/i })).toBeTruthy();
  expect(screen.getByRole('button', { name: /Sign Out/i })).toBeTruthy();
  expect(screen.getByRole('button', { name: /🔍/i })).toBeTruthy();
});

// Add more tests as project progresses.
