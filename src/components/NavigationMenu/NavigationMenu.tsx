import React from "react";
import { Box, Menu } from "../base";
import { NavigationMenuItem } from "./";
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";

const ListBox = styled.ul(() => ({
  listStyleType: "none",
  paddingInlineStart: 0,
}));

function NavigationMenu() {
  const location = useLocation();

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
        <ListBox
          role="listbox"
          style={{ listStyleType: "none", paddingInlineStart: 0 }}
        >
          <NavigationMenuItem
            label="Home"
            to="/"
            data-active={location.pathname === "/" || undefined}
          />
          <NavigationMenuItem
            label="About"
            to="/about"
            data-active={location.pathname === "/about" || undefined}
          />
          <NavigationMenuItem
            label="Career"
            to="/career"
            data-active={location.pathname === "/career" || undefined}
          />
          <NavigationMenuItem
            label="Contact"
            to="/contact"
            data-active={location.pathname === "/contact" || undefined}
          />
        </ListBox>
      </Menu>
    </Box>
  );
}

export default NavigationMenu;
