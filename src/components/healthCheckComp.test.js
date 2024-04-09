// Path: <rootDir>/src/components/healthCheckComp.test.js
//
// Test file for the HealthCheckComp component.
import React from 'react';
import HealthCheckComp from './healthCheckComp';
import { render, screen } from '@testing-library/react';

describe('Health check component', () => {
  it('should render', () => {
    render(<HealthCheckComp />);
    expect(screen.getByText('App is running and healthy.')).toBeInTheDocument();
  });
});
