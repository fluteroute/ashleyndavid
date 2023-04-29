import React from "react";
import { Flex, Image } from "../base";

export type AvatarProps = {
  variant: "main" | "home";
};

function Avatar(props: AvatarProps) {
  const { variant } = props;
  return (
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
          flexBasis: "auto",
          transition: "all 0.5s linear",
          ...(variant !== "home"
            ? {
                opacity: 0,
                flexShrink: 0,
                marginTop: "-120px",
              }
            : { flexGrow: 20 }),
        }}
      />
      <Image
        src="AD_logo_2.svg"
        sx={{
          boxShadow: "0 6px 4px -2px rgba(0, 0, 0, 0.25)",
          flexBasis: "auto",
          flexShrink: 0,
          ...(variant !== "home"
            ? {
                borderBottomLeftRadius: 130,
                borderBottomRightRadius: 130,
                flexGrow: 1,
              }
            : {
                position: "relative",
                bottom: ["5em", "5em", "5em", "11em"],
                left: ["5em", "5em", "5em", "10em"],
                maxWidth: [120, 180, 180, 260],
                zIndex: 0,
                borderBottomLeftRadius: [86, 122],
                borderBottomRightRadius: [86, 122],
                flexGrow: 20,
                transition: "all 1s",
              }),
        }}
      />
    </Flex>
  );
}

export default Avatar;
