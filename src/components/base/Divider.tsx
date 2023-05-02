import React from 'react';
import { Divider as ThemeUIDivider, DividerProps as ThemeUIDividerProps } from 'theme-ui';

export type DividerProps = ThemeUIDividerProps;
/**
 * Primary UI component for user interaction
 */
export const Divider = React.forwardRef<HTMLHRElement, DividerProps>((props, ref) => (
  <ThemeUIDivider ref={ref} {...props} />
));

Divider.displayName = 'Divider';

export default Divider;
