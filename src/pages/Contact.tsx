import React from 'react';
import { Box, Flex, Grid, IconButton, Paragraph, Typography, ContactForm } from '../components';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Contact() {
  return (
    <>
      <Paragraph>
        {"Thank you for considering reaching out! I'm always eager to connect with like-minded "}
        professionals, potential collaborators, or anyone interested in discussing innovative ideas
        and projects. If you have any questions, require assistance, or simply want to chat, please
        {" don't hesitate to get in touch. I value every opportunity to expand my network and "}
        knowledge. Looking forward to our conversation!
      </Paragraph>
      <Grid columns={[1, 1, 1, 2]}>
        <ContactForm />
        <Flex
          sx={{
            flexDirection: 'column',
            marginRight: 3,
            marginLeft: 3,
          }}
        >
          <Box sx={{ marginBottom: '1em' }}>
            <Typography variant="body1">
              {"If you're interested in connecting with me professionally, you can find me on " +
                "LinkedIn. Feel free to send a connection request or drop me a message. I'm always "}
              delighted to meet new people and explore potential collaborations. Additionally,
              {" you're welcome to visit my GitHub profile to explore my contributions, projects, and " +
                "repositories. Let's connect and create something extraordinary together!"}
            </Typography>
          </Box>
          <Flex
            sx={{
              flexDirection: 'row',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <IconButton
              aria-label="LinkedIn"
              as="a"
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              href="https://www.linkedin.com/in/ashleydavid/"
              target="_blank"
              sx={{
                marginLeft: 1,
                fontSize: '2em',
                height: '2.5em',
                width: '2.5em',
              }}
              variant="transparent"
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </IconButton>
            <IconButton
              aria-label="GitHub"
              as="a"
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              href="https://github.com/fluteroute"
              target="_blank"
              sx={{
                marginLeft: 1,
                fontSize: '2em',
                height: '2.5em',
                width: '2.5em',
              }}
              variant="transparent"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </IconButton>
          </Flex>
        </Flex>
      </Grid>
    </>
  );
}

export default Contact;
