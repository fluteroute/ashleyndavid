import React from 'react';
import { Button, ButtonProps, Spinner } from '../base';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export enum SubmitButtonStates {
  Loading = 'loading',
  Success = 'success',
  Failed = 'failed',
  Default = 'default',
}

export type SubmitButtonState = {
  success: boolean;
  failed: boolean;
  isLoading: boolean;
};

export type SubmitButtonProps = ButtonProps & {
  state: SubmitButtonStates;
};

export function SubmitButton(props: SubmitButtonProps) {
  const { state, ...other } = props;

  const buttonStates: { [key in SubmitButtonStates]: SubmitButtonState } = {
    [SubmitButtonStates.Loading]: {
      success: false,
      failed: false,
      isLoading: true,
    },
    [SubmitButtonStates.Success]: {
      success: true,
      failed: false,
      isLoading: false,
    },
    [SubmitButtonStates.Failed]: {
      success: false,
      failed: true,
      isLoading: false,
    },
    [SubmitButtonStates.Default]: {
      success: false,
      failed: false,
      isLoading: false,
    },
  };

  const { success, failed, isLoading } = buttonStates[state];

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
          '&:focus': {
            backgroundColor: 'success',
          },
        }),
        ...(failed && {
          backgroundColor: 'error',

          '&:hover': {
            backgroundColor: '#BA0E0E',
          },
          '&:focus': {
            backgroundColor: 'error',
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
