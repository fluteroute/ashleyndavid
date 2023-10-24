import React from 'react';
import { Flex, FlexProps, ThemeProvider } from '../../base';

export function AppWrapper(props: FlexProps) {
  const { sx, ...other } = props;

  return (
    <ThemeProvider>
      <Flex
        sx={{
          backgroundColor: '#412b43',
          backgroundImage: [
            'linear-gradient(173deg, #412b43 40%, #903749 63.72%, #C63D2F 101.44%)',
            'linear-gradient(173deg, #412b43 40%, #903749 63.72%, #C63D2F 101.44%)',
            'linear-gradient(173deg, #412b43 40%, #903749 63.72%, #C63D2F 101.44%)',
            'none',
          ],
          flexDirection: 'column',
          height: '100vh',
          alignItems: 'center',
          ...sx,
        }}
        {...other}
      />
    </ThemeProvider>
  );
}

export default AppWrapper;
