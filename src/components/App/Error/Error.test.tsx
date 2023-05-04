import React from 'react';
import { render, screen } from '../../../utils/setupTests';
import { Error } from './';

test('[components] Error: should render', () => {
  render(<Error />, { route: '/404' });

  expect(screen.getByText('404')).toBeDefined();
  expect(screen.getByText('Not Found')).toBeDefined();
  expect(screen.getByText('Oops! Sorry, an unexpected error has occurred.')).toBeDefined();
});
