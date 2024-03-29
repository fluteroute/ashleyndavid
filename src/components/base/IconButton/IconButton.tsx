import React from 'react';
import {
  IconButton as ThemeUIIconButton,
  IconButtonProps as ThemeUIIconButtonProps,
} from 'theme-ui';

export interface IconButtonProps extends ThemeUIIconButtonProps {
  isDisabled?: boolean;
  variant?: 'primary' | 'primaryOutline' | 'secondary' | 'secondaryOutline' | 'transparent';
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, isDisabled, onClick, variant = 'primary', sx, ...props }, ref) => {
    const disabledVariant = variant.includes('Outline') ? 'disabledOutline' : 'disabled';

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (isDisabled || !onClick) return;

      onClick(event);
    };

    return (
      <ThemeUIIconButton
        disabled={isDisabled ? true : undefined}
        onClick={handleClick}
        ref={ref}
        variant={isDisabled ? disabledVariant : variant}
        sx={{
          borderRadius: 99999999,
          fontSize: '26px',
          height: '44px',
          padding: '24px',
          width: '44px',
          ...sx,
        }}
        {...props}
      >
        {children}
      </ThemeUIIconButton>
    );
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;
