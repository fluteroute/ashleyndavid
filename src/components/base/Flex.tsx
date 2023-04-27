import React from "react";
import { Flex as ThemeUIFlex, FlexProps as ThemeUIFlexProps } from "theme-ui";

export type FlexProps = ThemeUIFlexProps;
/**
 * Primary UI component for user interaction
 */
export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (props, ref) => <ThemeUIFlex ref={ref} {...props} />
);

Flex.displayName = "Flex";

export default Flex;
