import React from 'react';
import { render, screen } from '../../../utils/setupTests';
import { Grid } from './Grid';

test('[components:base] Grid: should render', () => {
  render(<Grid>content</Grid>);

  expect(screen.getByText('content')).toBeDefined();
});
