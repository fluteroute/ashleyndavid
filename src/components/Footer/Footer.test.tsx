import React from 'react';
import { render, screen } from '../../utils/setupTests';
import { Footer } from './';

test('[components] Footer: should render', () => {
  render(<Footer />);

  expect(screen.getByText('© 2023 Ashley David. All rights reserved.')).toBeVisible();
  expect(screen.getByLabelText('LinkedIn')).toBeVisible();
  expect(screen.getByLabelText('GitHub')).toBeVisible();
});
