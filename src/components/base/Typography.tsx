import React from 'react';
import { Text, TextProps } from 'theme-ui';
import { baseTheme } from '../../utils/theme';

export interface TypographyProps extends TextProps {
  color?: 'textPrimary' | 'textSecondary';
  variant?: keyof typeof baseTheme.typography;
}

/**
 * Primary UI component for user interaction
 */
export const Typography = React.forwardRef<HTMLDivElement, TypographyProps>((props, ref) => {
  const { color = 'textPrimary', variant, sx, ...other } = props;

  return <Text ref={ref} sx={{ color, ...sx }} variant={variant} {...other} />;
});

Typography.displayName = 'Typography';

export default Typography;
