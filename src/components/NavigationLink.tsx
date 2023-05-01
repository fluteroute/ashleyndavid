import React from "react";
import { Link, LinkProps } from "./base";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

export type NavigationLinkProps = LinkProps & RouterLinkProps;
/**
 * Primary UI component for user interaction
 */
export const NavigationLink = React.forwardRef<
  HTMLAnchorElement,
  NavigationLinkProps
>((props, ref) => <Link as={RouterLink} ref={ref} {...props} />);

NavigationLink.displayName = "NavigationLink";

export default NavigationLink;
