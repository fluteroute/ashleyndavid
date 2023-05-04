import React from 'react';
import { render } from '../../../utils/setupTests';
import { ThemeProvider } from './ThemeProvider';

test('[components:base] ThemeProvider: should render', () => {
  render(<ThemeProvider />);
});
