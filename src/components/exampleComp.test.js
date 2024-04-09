// Path: <rootDir>/src/components/exampleComp.test.js
//
// Example unit test for the Example component.
import React from 'react';
import ExampleComp from './exampleComp';
import { render, screen } from '@testing-library/react';

describe('Example Component', () => {
  it('should render', () => {
    render(<ExampleComp />);
    expect(screen.getByText('Example Component')).toBeInTheDocument();
  });
});
