import React from 'react';
import { render, screen } from '../../utils/setupTests';
import { SubmitButton, SubmitButtonStates } from './';

const expectedButtonMessage: { [key in SubmitButtonStates]: string } = {
  [SubmitButtonStates.Success]: 'Success!',
  [SubmitButtonStates.Failed]: 'Try again!',
  [SubmitButtonStates.Default]: 'Send Message',
};

test.each(Object.values(SubmitButtonStates))(
  '[components] SubmitButton: should render in %s state',
  (state) => {
    render(<SubmitButton state={state} />);

    const expectedText = screen.getByText(expectedButtonMessage[state]);

    expect(expectedText).toBeDefined();
  }
);

test('[components] SubmitButton: should render in loading state', () => {
  render(<SubmitButton isLoading={true} />);

  expect(screen.getByLabelText('Loading')).toBeDefined();
});
