import React from 'react';
import { fireEvent, render, screen } from '../../../utils/setupTests';
import { Button } from './Button';

test('[components:base] Button: should render', () => {
  const onClickSpy = jest.fn();
  render(<Button onClick={onClickSpy}>Button</Button>);

  expect(screen.getByText('Button')).toBeDefined();

  fireEvent.click(screen.getByText('Button'));
  expect(onClickSpy).toHaveBeenCalled();
});
