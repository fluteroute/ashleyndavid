import React from 'react';
import { Flex as ThemeUIFlex, FlexProps as ThemeUIFlexProps } from 'theme-ui';

export type FlexProps = ThemeUIFlexProps;

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>((props, ref) => (
  <ThemeUIFlex ref={ref} {...props} />
));

Flex.displayName = 'Flex';

export default Flex;
