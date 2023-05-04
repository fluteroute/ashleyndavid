import React from 'react';
import { render, screen } from '../../../utils/setupTests';
import { Image } from './Image';

test('[components:base] Image: should render', () => {
  render(<Image alt="EPCOT" src="EPCOT.jpeg" />);

  expect(screen.getByAltText('EPCOT')).toBeDefined();
});
