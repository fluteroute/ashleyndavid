import React from 'react';
import { render, screen } from '../../utils/setupTests';
import { TechnologyListBoxItem } from './';
import { ListBox } from '../base';

test('[components] TechnologyListBoxItem: should render', () => {
  render(
    <ListBox variant="none">
      <TechnologyListBoxItem tech="Tech">content</TechnologyListBoxItem>
    </ListBox>
  );

  expect(screen.getByText('Tech:')).toBeDefined();
  expect(screen.getByText('content')).toBeDefined();
});
