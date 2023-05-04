import React from 'react';
import { render, screen, fireEvent } from '../../utils/setupTests';
import { NavigationMenu } from './NavigationMenu';

test('[components] NavigationMenu: should render', () => {
  render(<NavigationMenu />, { route: '/' });

  fireEvent.click(screen.getByLabelText('Navigation Menu'));

  expect(screen.getByText('Home')).toBeVisible();
  expect(screen.getByText('Home').parentElement).toHaveAttribute('href', '/');

  expect(screen.getByText('About')).toBeVisible();
  expect(screen.getByText('About').parentElement).toHaveAttribute('href', '/about');

  expect(screen.getByText('Career')).toBeVisible();
  expect(screen.getByText('Career').parentElement).toHaveAttribute('href', '/career');

  expect(screen.getByText('Contact')).toBeVisible();
  expect(screen.getByText('Contact').parentElement).toHaveAttribute('href', '/contact');
});
