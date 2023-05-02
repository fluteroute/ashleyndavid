import React from "react";
import { Flex, Image, ThemeProvider, Typography } from "..";
import { useRouteError } from "react-router-dom";

export function Error() {
  const error = useRouteError() as {
    status: number;
    statusText?: string;
    message?: string;
  };

  return (
    <ThemeProvider>
      <Flex
        className="Error"
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
          width: "100%",
          padding: 4,
        }}
      >
        <Image
          src="AD_logo_2.svg"
          sx={{ boxShadow: "unset", height: [250, 350], width: [250, 350] }}
        />
        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <Typography variant="h1">{error.status}</Typography>
          <Typography variant="h3">
            {error.statusText || error.message}
          </Typography>
        </Flex>
        <Typography variant="navLink" sx={{ textAlign: "center" }}>
          Oops! Sorry, an unexpected error has occurred.
        </Typography>
      </Flex>
    </ThemeProvider>
  );
}

Error.displayName = "ErrorPage";

export default Error;
