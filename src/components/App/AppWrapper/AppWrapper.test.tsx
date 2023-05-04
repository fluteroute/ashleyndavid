import React from 'react';
import { render, screen } from '../../../utils/setupTests';
import { AppWrapper } from './';

test('[components] AppWrapper: should render', () => {
  render(<AppWrapper>test</AppWrapper>);

  expect(screen.getByText('test')).toBeDefined();
});
