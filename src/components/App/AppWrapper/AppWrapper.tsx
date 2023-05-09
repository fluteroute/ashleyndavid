import React from 'react';
import { Flex, FlexProps, ThemeProvider } from '../../base';
import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom';

export function AppWrapper(props: FlexProps) {
  const { sx, ...other } = props;
  const location = useLocation();

  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, [location.pathname]);

  return (
    <ThemeProvider>
      <Flex
        sx={{
          backgroundImage: [
            'linear-gradient(173deg, #1B1F3A 30%, #53354A 73.72%, #91403A 101.44%)',
            'linear-gradient(173deg, #1B1F3A 30%, #53354A 73.72%, #91403A 101.44%)',
            'linear-gradient(173deg, #1B1F3A 30%, #53354A 73.72%, #91403A 101.44%)',
            'linear-gradient(113.91deg, #1B1F3A 34.95%, #53354A 69.17%, #91403A 91.51%)',
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
