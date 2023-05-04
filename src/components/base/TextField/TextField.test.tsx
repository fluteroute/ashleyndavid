import React from 'react';
import { fireEvent, render, screen } from '../../../utils/setupTests';
import { TextField } from './TextField';

test('[components:base] TextField: should render', () => {
  const onChangeSpy = jest.fn();
  render(<TextField onChange={onChangeSpy} label="test" />);

  expect(screen.getByLabelText('test')).toBeDefined();
  fireEvent.change(screen.getByLabelText('test'), { target: { value: 'hi' } });

  expect(onChangeSpy).toHaveBeenCalled();
});
