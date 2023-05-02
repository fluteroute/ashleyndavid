import React from 'react';
import { Link as ThemeUILink, LinkProps as ThemeUILinkProps } from 'theme-ui';

export type LinkProps = ThemeUILinkProps;
/**
 * Primary UI component for user interaction
 */
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <ThemeUILink ref={ref} {...props} />
));

Link.displayName = 'Link';

export default Link;
