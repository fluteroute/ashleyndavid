import React from "react";
import { Flex } from "./base";
import Avatar from "./Avatar";
import MainCard from "./ContentCard";
import { useLocation } from "react-router-dom";

export type LayoutProps = {
  children: React.ReactNode;
};

export function Layout(props: LayoutProps) {
  const { ...other } = props;
  const location = useLocation();

  const title =
    location.pathname !== "/"
      ? location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2)
      : "Ashley David";
  const variant = location.pathname !== "/" ? "main" : "home";

  return (
    <Flex
      className="App"
      sx={{
        backgroundImage: [
          "linear-gradient(173deg, #1B1F3A 30%, #53354A 73.72%, #91403A 101.44%)",
          "linear-gradient(173deg, #1B1F3A 30%, #53354A 73.72%, #91403A 101.44%)",
          "linear-gradient(173deg, #1B1F3A 30%, #53354A 73.72%, #91403A 101.44%)",
          "linear-gradient(113.91deg, #1B1F3A 34.95%, #53354A 69.17%, #91403A 91.51%)",
        ],
        flexDirection: "column",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: [0, 0, 0, variant !== "home" ? 0 : 120],
        paddingRight: [0, 0, 0, 120],
        paddingTop: [0, 0, 0, 80],
        paddingBottom: [0, 0, 0, 80],
        width: "100%",
      }}
    >
      <Flex
        sx={{
          flexDirection: ["column", "column", "column", "row"],
          padding: ["20px", "20px", "60px", "60px"],
          marginTop: [-220, -220, -220, 0],
          height: ["unset", "unset", "unset", "100%"],
        }}
      >
        <Avatar variant={variant} />
        <MainCard variant={variant} title={title} {...other} />
      </Flex>
    </Flex>
  );
}

export default Layout;
