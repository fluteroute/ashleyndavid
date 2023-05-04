import React from 'react';
import { fireEvent, render, screen } from '../../../utils/setupTests';
import { TextArea } from './TextArea';

test('[components:base] TextArea: should render', () => {
  const onChangeSpy = jest.fn();
  render(<TextArea onChange={onChangeSpy} label="test" />);

  expect(screen.getByLabelText('test')).toBeDefined();
  fireEvent.change(screen.getByLabelText('test'), { target: { value: 'hi' } });

  expect(onChangeSpy).toHaveBeenCalled();
});
