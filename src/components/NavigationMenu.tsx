import React from "react";
import { Box, Button, Menu } from "./base";
import { Link } from "react-router-dom";

type NavigationMenuItemProps = { label: string; to: string };

const NavigationMenuItem = React.forwardRef<
  HTMLLIElement,
  NavigationMenuItemProps
>((props, ref) => {
  const { label, to } = props;
  return (
    <li ref={ref}>
      <Button
        as={Link}
        //@ts-ignore
        to={to}
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
          <NavigationMenuItem label="Home" to="/" />
          <NavigationMenuItem label="About" to="/about" />
          <NavigationMenuItem label="Career" to="/career" />
          <NavigationMenuItem label="Contact" to="/contact" />
        </ul>
      </Menu>
    </Box>
  );
}

export default NavigationMenu;
