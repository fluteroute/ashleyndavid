import React from 'react';
import { render, screen } from '../../utils/setupTests';
import App from './App';

test('[components] App: should render', () => {
  render(<App />, { route: '/' });

  expect(screen.getByText('Test')).toBeDefined();
  expect(screen.getByLabelText('Navigation Menu')).toBeDefined();
  expect(screen.getByText('test')).toBeDefined();
  expect(screen.getByText('© 2023 Ashley David. All rights reserved.')).toBeDefined();
  expect(screen.getByLabelText('LinkedIn')).toBeDefined();
  expect(screen.getByLabelText('GitHub')).toBeDefined();
});
