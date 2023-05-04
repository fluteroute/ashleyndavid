import React from 'react';
import { Flex, Image, Typography } from '../../base';
import { AppWrapper } from '../AppWrapper';
import { useRouteError } from 'react-router-dom';

export function Error() {
  const error = useRouteError() as {
    status: number;
    statusText?: string;
    message?: string;
  };

  return (
    <AppWrapper
      className="Error"
      sx={{
        justifyContent: 'center',
        width: '100%',
        padding: 4,
      }}
    >
      <Image
        src="AD_logo_2.svg"
        sx={{ boxShadow: 'unset', height: [250, 350], width: [250, 350] }}
      />
      <Flex
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 2,
        }}
      >
        <Typography variant="h1">{error.status}</Typography>
        <Typography variant="h3">{error.statusText || error.message}</Typography>
      </Flex>
      <Typography variant="navLink" sx={{ textAlign: 'center' }}>
        Oops! Sorry, an unexpected error has occurred.
      </Typography>
    </AppWrapper>
  );
}

export default Error;
