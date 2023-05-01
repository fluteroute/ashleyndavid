import React from "react";
import { Box, Typography, TypographyProps } from "./base";

export function Paragraph(props: TypographyProps) {
  return (
    <Box sx={{ marginTop: "1em", marginBottom: "1em" }}>
      <Typography variant="body1" {...props} />
    </Box>
  );
}

export default Paragraph;
