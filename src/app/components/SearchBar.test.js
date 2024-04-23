// ./src/app/components/SearchBar.test.js
//
// Unit tests for SearchBar used for MainHeader.

// Essential imports.
import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import React from 'react';

// Local imports.
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('renders without crashing', () => {
    const { container } = render(<SearchBar />);
    expect(container).toBeTruthy();
  });

  it('renders correct elements', () => {
    render(<SearchBar />);

    // Check for static elements (icon and input.)
    expect(screen.getByText('search')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search Events')).toBeInTheDocument();
  });
});
