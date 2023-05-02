import React from 'react';
import { Box as ThemeUIBox, BoxProps as ThemeUIBoxProps } from 'theme-ui';

export type BoxProps = ThemeUIBoxProps;

export const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => (
  <ThemeUIBox ref={ref} {...props} />
));

Box.displayName = 'Box';

export default Box;
