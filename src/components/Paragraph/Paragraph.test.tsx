import React from 'react';
import { render, screen } from '../../utils/setupTests';
import { Paragraph } from './';

test('[components] Paragraph: should render', () => {
  render(<Paragraph>content</Paragraph>);

  expect(screen.getByText('content')).toBeDefined();
});
