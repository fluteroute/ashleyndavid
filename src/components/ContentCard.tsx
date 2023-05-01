import React from "react";
import { Box, Card, Flex, Typography } from "./base";
import NavigationMenu from "./NavigationMenu/NavigationMenu";

export type ContentCardProps = {
  children: React.ReactNode;
  title: string;
  description?: React.ReactNode;
  variant: "main" | "home";
};

export function ContentCard(props: ContentCardProps) {
  const { description, title, variant, ...other } = props;

  return (
    <Card>
      <Box
        sx={{
          marginLeft: [0, 0, 0, variant !== "home" ? 180 : 128],
          marginTop: [160, 160, 160, 0],
        }}
      >
        <Flex
          sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ marginBottom: description ? 3 : undefined }}>
            <Typography variant="h1" sx={{ fontSize: [44, 44, 44, 64] }}>
              {title}
            </Typography>
            <Box>
              <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                {description}
              </Typography>
            </Box>
          </Box>
          <NavigationMenu />
        </Flex>
        <Box
          sx={{
            height: [
              title !== "Career" && title !== "Ashley David" ? "36vh" : "24vh",
              title !== "Career" && title !== "Ashley David" ? "36vh" : "24vh",
              title !== "Career" && title !== "Ashley David" ? "36vh" : "24vh",
              title !== "Career" && title !== "Ashley David" ? "58vh" : "54vh",
            ],
            overflowY: "scroll",
            paddingRight: [3, 3, 3, 40],
          }}
          {...other}
        />
      </Box>
    </Card>
  );
}

export default ContentCard;
