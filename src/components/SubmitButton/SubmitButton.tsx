import React from 'react';
import { Button, ButtonProps, Spinner } from '../base';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type SubmitButtonProps = ButtonProps & {
  success: boolean;
  failed: boolean;
  isLoading: boolean;
};

export function SubmitButton(props: SubmitButtonProps) {
  const { success, failed, isLoading, ...other } = props;
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
        }),
        ...(failed && {
          backgroundColor: 'error',
          '&:hover': {
            backgroundColor: '#BA0E0E',
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