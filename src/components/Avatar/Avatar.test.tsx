import React from 'react';
import { render, screen } from '../../utils/setupTests';
import { Avatar } from './Avatar';

test('[components] Avatar should render with main variant', () => {
  render(<Avatar variant="main" />);

  expect(screen.getByAltText("Ashley's Avatar")).not.toBeVisible();
  expect(screen.getByAltText('AD Logo')).toBeVisible();
});

test('[components] Avatar should render with home variant', () => {
  render(<Avatar variant="home" />);

  expect(screen.getByAltText("Ashley's Avatar")).toBeVisible();
  expect(screen.getByAltText('AD Logo')).toBeVisible();
});
