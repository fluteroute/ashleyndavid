import React from "react";
import { Button, ListBoxItem } from "../base";
import { Link } from "react-router-dom";

export type NavigationMenuItemProps = { label: string; to: string };

export const NavigationMenuItem = React.forwardRef<
  HTMLLIElement,
  NavigationMenuItemProps
>((props, ref) => {
  const { label, to, ...other } = props;

  return (
    <ListBoxItem ref={ref}>
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

          "&[data-active]": {
            fontWeight: "800",
            color: "#FFFFFF",
            textDecoration: "underline",
          },
        }}
        {...other}
      >
        {label}
      </Button>
    </ListBoxItem>
  );
});

export default ListBoxItem;
