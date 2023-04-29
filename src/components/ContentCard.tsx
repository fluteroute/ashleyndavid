import React from "react";
import { Box, Card, Flex, Typography } from "./base";
import NavigationMenu from "./NavigationMenu";

export type ContentCardProps = {
  children: React.ReactNode;
  title: string;
  variant: "main" | "home";
};

export function ContentCard(props: ContentCardProps) {
  const { title, variant, ...other } = props;

  return (
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
  );
}

export default ContentCard;
