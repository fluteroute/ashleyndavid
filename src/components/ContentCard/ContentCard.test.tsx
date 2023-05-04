import React from 'react';
import { render, screen } from '../../utils/setupTests';
import { ContentCard } from './ContentCard';

test('[components] ContentCard: should render with all props with main variant', () => {
  render(
    <ContentCard title="Title" description="description" variant="main">
      content
    </ContentCard>
  );

  expect(screen.getByText('Title')).toBeVisible();
  expect(screen.getByText('description')).toBeVisible();
  expect(screen.getByText('content')).toBeVisible();
});

test('[components] ContentCard: should render without optional props', () => {
  render(
    <ContentCard title="Title 2" variant="main">
      content 2
    </ContentCard>
  );

  expect(screen.getByText('Title 2')).toBeVisible();
  expect(screen.getByText('content 2')).toBeVisible();
});
