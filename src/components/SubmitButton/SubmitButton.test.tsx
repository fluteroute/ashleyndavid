import React from 'react';
import { render, screen } from '../../utils/setupTests';
import { SubmitButton } from './';

test('[components] SubmitButton: should render in default state', () => {
  render(<SubmitButton success={false} failed={false} isLoading={false} />);

  expect(screen.getByText('Send Message')).toBeDefined();
});

test('[components] SubmitButton: should render in loading state', () => {
  render(<SubmitButton success={false} failed={false} isLoading={true} />);

  expect(screen.getByLabelText('Loading')).toBeDefined();
});

test('[components] SubmitButton: should render in success state', () => {
  render(<SubmitButton success={true} failed={false} isLoading={false} />);

  expect(screen.getByText('Success!')).toBeDefined();
});

test('[components] SubmitButton: should render in failed state', () => {
  render(<SubmitButton success={false} failed={true} isLoading={false} />);

  expect(screen.getByText('Try again!')).toBeDefined();
});
