import React from 'react';
import { render, screen } from '../../../utils/setupTests';
import { NavigationMenuItem } from './NavigationMenuItem';
import { ListBox } from '../../base';

test('[components] NavigationMenuItem: should render', () => {
  render(
    <ListBox variant="none">
      <NavigationMenuItem label="Home" to="/" />
    </ListBox>
  );

  expect(screen.getByText('Home')).toBeDefined();
});
