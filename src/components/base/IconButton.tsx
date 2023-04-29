import React from "react";
import {
  IconButton as ThemeUIIconButton,
  IconButtonProps as ThemeUIIconButtonProps,
} from "theme-ui";

export interface IconButtonProps extends ThemeUIIconButtonProps {
  isDisabled?: boolean;
  variant?:
    | "primary"
    | "primaryOutline"
    | "secondary"
    | "secondaryOutline"
    | "transparent";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

/**
 * Primary UI component for user interaction
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { children, isDisabled, onClick, variant = "primary", sx, ...props },
    ref
  ) => {
    const handleClick = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      if (isDisabled || !onClick) return;

      onClick(event);
    };

    const disabledVariant = variant.includes("Outline")
      ? "disabledOutline"
      : "disabled";

    return (
      <ThemeUIIconButton
        disabled={isDisabled ? true : undefined}
        onClick={handleClick}
        ref={ref}
        variant={isDisabled ? disabledVariant : variant}
        sx={{
          borderRadius: 99999999,
          fontSize: "26px",
          height: "44px",
          padding: "24px",
          width: "44px",
          ...sx,
        }}
        {...props}
      >
        {children}
      </ThemeUIIconButton>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
