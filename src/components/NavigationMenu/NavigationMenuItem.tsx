import React from "react";
import { Button, ListBoxItem } from "../base";
import {
  IconDefinition,
  faAddressCard,
  faClipboardList,
  faHouse,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export type NavigationMenuItemProps = { label: string; to: string };

export const NavigationMenuItem = React.forwardRef<
  HTMLLIElement,
  NavigationMenuItemProps
>((props, ref) => {
  const { label, to, ...other } = props;
  const iconMap: Record<string, IconDefinition> = {
    Home: faHouse,
    About: faAddressCard,
    Career: faClipboardList,
    Contact: faEnvelope,
  };

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
        <FontAwesomeIcon
          icon={iconMap[label]}
          style={{ marginRight: "12px" }}
        />
        {label}
      </Button>
    </ListBoxItem>
  );
});

export default ListBoxItem;
