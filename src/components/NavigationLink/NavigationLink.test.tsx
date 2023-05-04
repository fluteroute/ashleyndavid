import React from 'react';
import { render, screen } from '../../utils/setupTests';
import { NavigationLink } from './';

test('[components] NavigationLink: should render', () => {
  render(<NavigationLink to="/">Test Link</NavigationLink>);

  expect(screen.getByText('Test Link')).toBeDefined();
  expect(screen.getByText('Test Link')).toHaveAttribute('href', '/');
});
