import React from 'react';
import { render, screen } from '../../utils/setupTests';
import { About } from './About';

test('[pages] About: should render', () => {
  render(<About />);

  expect(screen.getByAltText('Ashley hiking')).toBeDefined();
  expect(screen.getByAltText('Ashley playing flute')).toBeDefined();
  expect(screen.getByAltText('kayaking')).toBeDefined();
  expect(screen.getByAltText('EPCOT')).toBeDefined();
});
