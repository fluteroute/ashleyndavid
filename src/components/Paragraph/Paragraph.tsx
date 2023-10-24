import React from 'react';
import { Box, Typography, TypographyProps } from '../base';

export function Paragraph(props: TypographyProps) {
  return (
    <Box as="p" sx={{ marginTop: '1em', marginBottom: '1em' }}>
      <Typography color="textPrimary" variant="body1" {...props} />
    </Box>
  );
}

export default Paragraph;
