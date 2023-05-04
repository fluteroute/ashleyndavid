import React from 'react';
import { Box, Typography } from '../';
import { Input, InputProps } from 'theme-ui';
import { v4 as uuidv4 } from 'uuid';

export interface TextFieldProps extends InputProps {
  label?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ isDisabled, isRequired = false, label, onChange, placeholder, ...props }, ref) => {
    const labelId = uuidv4();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (isDisabled || !onChange) return;

      onChange(event);
    };

    return (
      <Box sx={{ marginBottom: 3 }}>
        {label && (
          <Typography
            as="label"
            id={labelId}
            variant="label"
            sx={{ color: 'textPrimary', marginLeft: '6px' }}
          >
            {label}
            {isRequired && '*'}
          </Typography>
        )}
        <Input
          aria-labelledby={labelId}
          data-disabled={isDisabled ? true : undefined}
          disabled={isDisabled ? true : undefined}
          onChange={handleChange}
          placeholder={!isDisabled ? placeholder : undefined}
          ref={ref}
          required={isRequired && true}
          {...props}
        />
      </Box>
    );
  }
);

TextField.displayName = 'TextField';

export default TextField;
