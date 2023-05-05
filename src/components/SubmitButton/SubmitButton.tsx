import React from 'react';
import { Button, ButtonProps, Spinner } from '../base';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export enum SubmitButtonStates {
  Success = 'success',
  Failed = 'failed',
  Default = 'default',
}

export type SubmitButtonProps = ButtonProps & {
  isLoading?: boolean;
  state?: SubmitButtonStates;
};

export function SubmitButton(props: SubmitButtonProps) {
  const { isLoading = false, state = SubmitButtonStates.Default, ...other } = props;

  const success = state === SubmitButtonStates.Success;
  const failed = state === SubmitButtonStates.Failed;

  return (
    <Button
      disabled={success || undefined}
      type="submit"
      sx={{
        marginLeft: 2,
        minWidth: 152,
        minHeight: 44,
        ...(success && {
          backgroundColor: 'success',
          '&:hover': {
            backgroundColor: 'success',
          },
          '&:focus, :focus-visible': {
            backgroundColor: 'success',
          },
        }),
        ...(failed && {
          backgroundColor: 'error',

          '&:hover': {
            backgroundColor: '#BA0E0E',
          },
          '&:focus, :focus-visible': {
            backgroundColor: 'error',
            boxShadow: '0px 0px 2px 4px #BA0E0E',
          },
        }),
      }}
      {...other}
    >
      {isLoading && (
        <Spinner
          aria-label="Loading"
          sx={{
            color: 'textPrimary',
            height: 20,
            width: 20,
          }}
        />
      )}
      {!isLoading && !success && !failed && 'Send Message'}
      {!isLoading && success && (
        <>
          <FontAwesomeIcon icon={faCheck} style={{ marginRight: '8px' }} />
          Success!
        </>
      )}
      {!isLoading && !success && failed && 'Try again!'}
    </Button>
  );
}
