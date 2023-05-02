import React from 'react';
import { Spinner as ThemeUISpinner, SpinnerProps as ThemeUISpinnerProps } from 'theme-ui';

export type SpinnerProps = ThemeUISpinnerProps;

export const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>((props, ref) => (
  <ThemeUISpinner ref={ref} {...props} />
));

Spinner.displayName = 'Spinner';

export default Spinner;
