import React from 'react';
import { render, screen } from '../../utils/setupTests';
import { Career, technologies } from './Career';

test('[pages] Career: should render', () => {
  render(<Career />);

  expect(screen.getByText('Technologies')).toBeDefined();
  technologies.forEach(({ tech, values }) => {
    expect(screen.getByText(`${tech}:`)).toBeDefined();
    expect(screen.getByText(values)).toBeDefined();
  });
});
