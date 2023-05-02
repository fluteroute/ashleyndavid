import React from 'react';
import { Switch as ThemeUISwitch, SwitchProps as ThemeUISwitchProps } from 'theme-ui';

export type SwitchProps = ThemeUISwitchProps;

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>((props, ref) => (
  <ThemeUISwitch ref={ref} {...props} />
));

Switch.displayName = 'Switch';

export default Switch;
