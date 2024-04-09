// ./src/pages/Ziqi.test.js
//
// Unit tests for the Ziqi page.

// React essential imports.
import React from 'react';
import { render } from '@testing-library/react';

// Page imports.
import Ziqi from './Ziqi';

test('Ziqi renders without crashing', () => {
  const { container } = render(<Ziqi />);
  expect(container).toBeTruthy();
});

// Add more tests as project progresses.
