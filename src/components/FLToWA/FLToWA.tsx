import React from 'react';
import { Box, Flex, Typography } from '../base';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faLocationDot, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { Florida, Washington } from './';

export function FLToWA() {
  return (
    <Flex
      as="figure"
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Flex
        sx={{
          flexDirection: ['column', 'column', 'row', 'row'],
          alignItems: 'center',
          justifyContent: 'center',
          margin: [0, 0, 0, 5],
          maxWidth: ['250px', '100%'],
        }}
      >
        <Flex
          sx={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Florida />
          <Typography
            as="figcaption"
            variant="label"
            sx={{ marginTop: 3, marginBottom: [3, 3, 0, 0] }}
          >
            <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: '8px' }} />
            Tampa, FL
          </Typography>
        </Flex>
        <Box
          sx={{
            margin: ['20px', '20px', '40px', '40px'],
            transform: 'rotate(90deg)',
            '@media screen and (min-width: 52em)': {
              transform: 'unset',
            },
          }}
        >
          <FontAwesomeIcon icon={faArrowRightLong} size="2xl" />
        </Box>
        <Flex
          sx={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Washington />
          <Typography as="figcaption" variant="label" sx={{ marginTop: 3 }}>
            <FontAwesomeIcon icon={faLocationPin} style={{ marginRight: '8px' }} />
            Seattle, WA
          </Typography>
        </Flex>
      </Flex>
    </Flex>
  );
}
