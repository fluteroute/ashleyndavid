import React from "react";
import { Box, Flex, Image } from "../base";

function MainAvatar() {
  return (
    <Box
      sx={{
        alignSelf: "center",
        marginBottom: ["-50px", "-50px", "-50px", 0],
        marginLeft: [0, 0, 0, "-110px"],
        position: ["relative", "relative", "relative", "fixed"],
        top: ["8em", "8em", "8em", "10em"],
        left: ["none", "none", "none", "5em"],
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
          src="AD_logo_2.svg"
          sx={{
            borderBottomLeftRadius: [106, 146],
            borderBottomRightRadius: [106, 146],
            boxShadow: "0 6px 4px -2px rgba(0, 0, 0, 0.25)",
          }}
        />
      </Flex>
    </Box>
  );
}

export default MainAvatar;
