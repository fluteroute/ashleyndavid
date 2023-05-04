import React from 'react';
import { render, screen } from '../../utils/setupTests';
import { FLToWA } from './FLToWA';

test('[components] FLToWA: should render', () => {
  render(<FLToWA />);

  expect(screen.getByText('Tampa, FL')).toBeDefined();
  expect(screen.getByText('Seattle, WA')).toBeDefined();
});
