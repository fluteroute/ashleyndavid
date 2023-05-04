import React from 'react';
import { render, screen } from '../../utils/setupTests';
import { Home } from './Home';

test('[pages] Home: should render', () => {
  render(<Home />);

  expect(screen.getByText('Tampa, FL')).toBeDefined();
  expect(screen.getByText('Seattle, WA')).toBeDefined();

  expect(screen.getByAltText('Ninja, an orange munchkin cat')).toBeVisible();
  expect(screen.getByAltText('Hiking in Pedernales Falls State Park')).toBeVisible();
  expect(screen.getByAltText("Holiday Phontonic's Light Show")).toBeVisible();

  expect(screen.getByLabelText('About')).toBeVisible();
  expect(screen.getByLabelText('Career')).toBeVisible();
  expect(screen.getByLabelText('Contact')).toBeVisible();
});
