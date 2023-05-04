import React from 'react';
import { render, screen } from '../../../utils/setupTests';
import { Spinner } from './Spinner';

test('[components:base] Spinner: should render', () => {
  render(<Spinner aria-label="loading" />);

  expect(screen.getByLabelText('loading')).toBeDefined();
});
