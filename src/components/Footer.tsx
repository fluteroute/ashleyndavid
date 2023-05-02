import React from 'react';
import { Box, Flex, IconButton, Typography } from './base';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Footer() {
  return (
    <Flex
      sx={{
        flexDirection: ['column-reverse', 'column-reverse', 'column-reverse', 'row'],
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: ['unset', 'unset', 'unset', '100%'],
        flexWrap: 'wrap',
        paddingLeft: [0, 0, 0, '3em'],
        paddingRight: [0, 0, 0, '3em'],
        margin: [3, 3, 3, 1],
      }}
    >
      <Box>
        <Typography variant="cc">© 2023 Ashley David. All rights reserved.</Typography>
      </Box>
      <Flex sx={{ flexDirection: 'row' }}>
        <IconButton
          aria-label="LinkedIn"
          as="a"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          href="https://www.linkedin.com/in/ashleydavid/"
          target="_blank"
          sx={{ marginLeft: 1 }}
          variant="transparent"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </IconButton>
        <IconButton
          aria-label="GitHub"
          as="a"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          href="https://github.com/fluteroute"
          target="_blank"
          sx={{ marginLeft: 1 }}
          variant="transparent"
        >
          <FontAwesomeIcon icon={faGithub} />
        </IconButton>
      </Flex>
    </Flex>
  );
}

export default Footer;
