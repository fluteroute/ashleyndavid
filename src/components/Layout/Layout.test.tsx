import React from 'react';
import { render, screen } from '../../utils/setupTests';
import { Layout } from './Layout';

const commonContentOnLayout = () => {
  expect(screen.getByLabelText('Navigation Menu')).toBeDefined();
  expect(screen.getByText('content')).toBeDefined();
  expect(screen.getByText('© 2023 Ashley David. All rights reserved.')).toBeDefined();
  expect(screen.getByLabelText('LinkedIn')).toBeDefined();
  expect(screen.getByLabelText('GitHub')).toBeDefined();
};

test('[components] Layout: should render for home path', () => {
  render(<Layout title="Ashley David">content</Layout>);

  expect(screen.getByText('Ashley David')).toBeDefined();
  expect(
    screen.getByText(
      'Transforming software landscapes: Merging creativity, expertise, and growth for exceptional results.'
    )
  ).toBeDefined();
  commonContentOnLayout();
});

test('[components] Layout: should render for about path', () => {
  render(<Layout title="About">content</Layout>);

  expect(screen.getByText('About')).toBeDefined();
  commonContentOnLayout();
});

test('[components] Layout: should render for career path', () => {
  render(<Layout title="Career">content</Layout>);

  expect(screen.getByText('Career')).toBeDefined();
  commonContentOnLayout();
});

test('[components] Layout: should render for contact path', () => {
  render(<Layout title="Contact">content</Layout>);

  expect(screen.getByText('Contact')).toBeDefined();
  commonContentOnLayout();
});
