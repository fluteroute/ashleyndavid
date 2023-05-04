import React from 'react';
import { render, screen } from '../../../utils/setupTests';
import { Box } from './Box';

test('[components:base] Box: should render', () => {
  render(<Box>content</Box>);

  expect(screen.getByText('content')).toBeDefined();
});
