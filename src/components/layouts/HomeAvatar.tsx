import React from "react";
import { Flex, Image } from "../base";

function HomeAvatar() {
  return (
    <>
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
          }}
        />
        <Image
          src="AD_logo_2.svg"
          sx={{
            position: "relative",
            bottom: ["5em", "5em", "5em", "11em"],
            left: ["5em", "5em", "5em", "10em"],
            maxWidth: [120, 180, 180, 260],
            zIndex: 1,
            borderBottomLeftRadius: [86, 122],
            borderBottomRightRadius: [86, 122],
            boxShadow: "0 6px 4px -2px rgba(0, 0, 0, 0.25)",
          }}
        />
      </Flex>
    </>
  );
}

export default HomeAvatar;
