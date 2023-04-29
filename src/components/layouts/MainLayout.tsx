import React from "react";
import { Box, Card, Flex, Typography } from "../base";
import Avatar from "./MainAvatar";
import NavigationMenu from "../NavigationMenu";
import { useLocation } from "react-router-dom";

export type MainLayoutProps = {
  children: React.ReactNode;
};

export function MainLayout(props: MainLayoutProps) {
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
        <Box
          sx={{
            alignSelf: "center",
            marginBottom: ["-50px", "-50px", "-50px", 0],
            marginLeft: [0, 0, 0, "-110px"],
            position: "relative",
            transition: "all 1s linear",
            ...(variant !== "home"
              ? {
                  top: ["8em", "8em", "8em", "unset"],
                  left: ["none", "none", "none", "unset"],
                  transform: [
                    "translateY(1px) translateX(1px)",
                    "translateY(1px) translateX(1px)",
                    "translateY(1px) translateX(1px)",
                    "translateY(-26em) translateX(13em)",
                  ],
                  maxWidth: [220, 220, 220, 280],
                  minWidth: [0, 0, 280, 280],
                }
              : {
                  top: ["15em", "15em", "15em", "5em"],
                  left: ["none", "none", "none", "6em"],
                  maxWidth: [220, 280, 300, 554],
                  minWidth: [0, 0, 300, 554],
                }),
          }}
        >
          <Avatar variant={variant} />
        </Box>
        <Card>
          <Box
            sx={{
              marginLeft: [0, 0, 0, variant !== "home" ? 180 : 120],
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
              }}
              {...other}
            />
          </Box>
        </Card>
      </Flex>
    </Flex>
  );
}

export default MainLayout;
