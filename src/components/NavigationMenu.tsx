import React from "react";
import { Box, Button, Menu } from "./base";

type NavigationMenuItemProps = { label: string; href: string };

const NavigationMenuItem = React.forwardRef<
  HTMLLIElement,
  NavigationMenuItemProps
>((props, ref) => {
  const { label, href } = props;
  return (
    <li ref={ref}>
      <Button
        as="a"
        //@ts-ignore
        href={href}
        variant="secondary"
        sx={{
          borderRadius: 0,
          width: "100%",
          paddingRight: "24px",
          paddingLeft: "24px",
          fontFamily: "Source Code Pro, Arial",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "normal",
          letterSpacing: "1px",
          textAlign: "start",
          textDecoration: "underline",
        }}
      >
        {label}
      </Button>
    </li>
  );
});

function NavigationMenu() {
  const sx = {
    borderRadius: 0,
    width: "100%",
    paddingRight: "24px",
    paddingLeft: "24px",
  };

  return (
    <Box
      sx={{
        paddingRight: 2,
        paddingLeft: 2,
        position: ["fixed", "fixed", "fixed", "unset"],
        top: ["1em", "1em", "1em", "unset"],
        right: ["1em", "1em", "1em", "unset"],
      }}
    >
      <Menu align="start" side="right">
        <ul
          role="listbox"
          style={{ listStyleType: "none", paddingInlineStart: 0 }}
        >
          <NavigationMenuItem label="Home" href="/home" />
          <NavigationMenuItem label="About" href="/about" />
          <NavigationMenuItem label="Career" href="/career" />
          <NavigationMenuItem label="Contact" href="/contact" />
        </ul>
      </Menu>
    </Box>
  );
}

export default NavigationMenu;
