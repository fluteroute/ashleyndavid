import React from 'react';
import { Button as ThemeUIButton, ButtonProps as ThemeUIButtonProps } from 'theme-ui';

export interface ButtonProps extends ThemeUIButtonProps {
  isDisabled?: boolean;
  variant?: 'primary' | 'primaryOutline' | 'secondary' | 'secondaryOutline';
  onClick?: () => void;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, isDisabled, onClick, variant = 'primary', ...props }, ref) => {
    const disabledVariant = variant.includes('Outline') ? 'disabledOutline' : 'disabled';

    const handleClick = () => {
      if (isDisabled || !onClick) return;

      onClick();
    };

    return (
      <ThemeUIButton
        disabled={isDisabled ? true : undefined}
        onClick={handleClick}
        ref={ref}
        variant={isDisabled ? disabledVariant : variant}
        {...props}
      >
        {children}
      </ThemeUIButton>
    );
  }
);

Button.displayName = 'Button';

export default Button;
