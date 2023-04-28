import React from "react";
import { Box, Flex, Image } from "./base";

function HomeAvatar() {
  return (
    <Box
      sx={{
        alignSelf: "center",
        marginBottom: ["-50px", "-50px", "-50px", 0],
        marginLeft: [0, 0, 0, "-110px"],
        position: "relative",
        top: ["15em", "15em", "15em", "5em"],
        left: ["none", "none", "none", "6em"],
        maxWidth: [220, 280, 300, "none"],
        minWidth: [0, 0, 0, 440, 554],
      }}
    >
      <Flex
        sx={{
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Image
          src="avatar.jpeg"
          sx={{
            borderRadius: 400,
            zIndex: 1,
          }}
        />
        <Image
          src="AD_logo_2.svg"
          sx={{
            position: "relative",
            bottom: ["5em", "5em", "5em", "11em"],
            left: ["5em", "5em", "5em", "10em"],
            maxWidth: [120, 180, 180, 260],
            zIndex: 2,
            borderBottomLeftRadius: [86, 122],
            borderBottomRightRadius: [86, 122],
            boxShadow: "0 6px 4px -2px rgba(0, 0, 0, 0.25)",
          }}
        />
      </Flex>
    </Box>
  );
}

export default HomeAvatar;
