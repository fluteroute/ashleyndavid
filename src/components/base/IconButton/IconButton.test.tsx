import React from 'react';
import { fireEvent, render, screen } from '../../../utils/setupTests';
import { IconButton } from './IconButton';

test('[components:base] IconButton: should render', () => {
  const onClickSpy = jest.fn();
  render(<IconButton onClick={onClickSpy}>button</IconButton>);

  expect(screen.getByText('button')).toBeDefined();

  fireEvent.click(screen.getByText('button'));
  expect(onClickSpy).toHaveBeenCalled();
});
