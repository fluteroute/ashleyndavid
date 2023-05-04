import React from 'react';
import { fireEvent, render, screen } from '../../../utils/setupTests';
import { ListBoxItem } from '../ListBox';
import { Menu } from './Menu';

test('[components:base] Menu: should render', () => {
  render(
    <Menu>
      <ListBoxItem>item</ListBoxItem>
    </Menu>
  );

  fireEvent.click(screen.getByLabelText('Navigation Menu'));

  expect(screen.getByText('item')).toBeDefined();
});
