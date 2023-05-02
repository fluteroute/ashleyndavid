import React from 'react';
import { Textarea, TextareaProps } from 'theme-ui';
import { Typography } from './Typography';
import { v4 as uuidv4 } from 'uuid';
import { Box } from '.';

export interface TextAreaProps extends TextareaProps {
  label?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

/**
 * Primary UI component for user interaction
 */
export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ isDisabled, isRequired = false, label, onChange, placeholder, rows = 8, ...props }, ref) => {
    const labelId = uuidv4();
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (isDisabled || !onChange) return;

      onChange(event);
    };

    return (
      <Box sx={{ marginTop: 3, marginBottom: 3 }}>
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
        <Textarea
          aria-labelledby={labelId}
          data-disabled={isDisabled ? true : undefined}
          disabled={isDisabled ? true : undefined}
          onChange={handleChange}
          placeholder={!isDisabled ? placeholder : undefined}
          ref={ref}
          required={isRequired && true}
          rows={rows}
          {...props}
        />
      </Box>
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
