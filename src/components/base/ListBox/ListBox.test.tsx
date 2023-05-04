import React from 'react';
import { render, screen } from '../../../utils/setupTests';
import { ListBox, ListBoxItem } from './';

test('[components:base] ListBox: should render', () => {
  render(
    <ListBox>
      <ListBoxItem>item</ListBoxItem>
    </ListBox>
  );

  expect(screen.getByText('item')).toBeDefined();
});
