import React from "react";
import { Box, Card, Flex, Typography } from "../base";
import MainAvatar from "./MainAvatar";
import NavigationMenu from "../NavigationMenu";

export type MainLayoutProps = {
  avatar?: React.ReactNode;
  children?: React.ReactNode;
  title: string;
  variant?: "home" | "main";
};

export function MainLayout(props: MainLayoutProps) {
  const { avatar = <MainAvatar />, children, title, variant = "main" } = props;

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
        paddingLeft: [0, 0, 0, 120],
        paddingRight: [0, 0, 0, 120],
        paddingTop: [0, 0, 0, 80],
        paddingBottom: [0, 0, 0, 80],
      }}
    >
      <Flex
        sx={{
          flexDirection: ["column", "column", "column", "row"],
          padding: ["20px", "20px", "60px", "60px"],
          marginTop: [-220, -220, -220, 0],
          height: variant === "main" ? "100%" : "unset",
        }}
      >
        {avatar}
        <Card>
          <Box
            sx={{
              marginLeft: [0, 0, 0, 128],
              marginTop: [160, 160, 160, 40],
            }}
          >
            <Flex
              sx={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h1" sx={{ fontSize: [44, 44, 44, 64] }}>
                {title}
              </Typography>
              <NavigationMenu />
            </Flex>
            <Box
              sx={{
                height: ["40vh", "40vh", "40vh", "46vh"],
                overflowY: "scroll",
                paddingRight: [0, 0, 0, 40],
                marginTop: [20, 20, 20, 40],
                transitionTimingFunction: "ease-in-out",
                transition: "width 2s",
              }}
            >
              {children}
            </Box>
          </Box>
        </Card>
      </Flex>
    </Flex>
  );
}

export default MainLayout;
