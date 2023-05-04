import React from 'react';
import { render, screen } from '../../utils/setupTests';
import { Contact } from './Contact';

test('[pages] Contact: should render', () => {
  render(<Contact />);

  expect(screen.getByLabelText('Email*')).toBeVisible();
  expect(screen.getByLabelText('Subject*')).toBeVisible();
  expect(screen.getByLabelText('Message*')).toBeVisible();
  expect(screen.getByText('Send Message')).toBeDefined();

  expect(screen.getByLabelText('LinkedIn')).toBeVisible();
  expect(screen.getByLabelText('GitHub')).toBeVisible();
});
