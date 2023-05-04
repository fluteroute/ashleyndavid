import React from 'react';
import { render, screen } from '../../../utils/setupTests';
import { Link } from './Link';

test('[components:base] Link: should render', () => {
  render(<Link href="https://google.com">link</Link>);

  expect(screen.getByText('link')).toBeDefined();
  expect(screen.getByText('link')).toHaveAttribute('href', 'https://google.com');
});
