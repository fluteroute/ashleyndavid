import React from 'react';
import { Grid, Flex, Iframe, Image, Link, IconButton } from '../../components/base';
import { faAddressCard, faClipboardList, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { NavigationLink, Paragraph, FLToWA } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeUIStyleObject } from 'theme-ui';

export function Home() {
  const imageSx: ThemeUIStyleObject = {
    boxShadow: 'unset',
    width: '250px',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '20px',
  };
  const navigationLinkSx = {
    marginTop: 2,
    '&:hover': {
      color: 'primary',
    },
    '&:focus, :focus-visible': {
      color: 'darkenPrimary',
      outline: 'none',
    },
  };
  const iconButtonSx = {
    marginTop: 2,
    marginLeft: 1,
    fontSize: '2em',
    height: '2.5em',
    width: '2.5em',
  };

  return (
    <>
      <Paragraph>
        A software engineer with a passion for building innovative design systems, web applications,
        and automated test frameworks. Previously based in Tampa, FL, she now calls Seattle, WA, her
        home. With vast experience in front end development, combined with Scrum Master expertise,
        Ashley has contributed to the success of high-performance teams, as well as working at
        dynamic startups.
      </Paragraph>
      <FLToWA />
      <Paragraph>
        As a driven professional, Ashley is focused on career growth in full stack development and
        leadership, always striving to make a meaningful impact in the tech industry. Outside of her
        professional life, Ashley is an avid music enthusiast, performing piccolo and flute with the{' '}
        <Link href="http://www.nathanmuehl.com/spcbands/ws.html" target="_blank">
          Wind Symphony of St. Petersburg College
        </Link>
        . She loves hiking and exploring theme parks with her husband, creating cherished memories
        together. During the holiday season, Ashley and her husband (Gerry Hernandez) are known for
        their spectacular Christmas light show, which has been featured on the local news,{' '}
        <Link href="https://www.youtube.com/@GerryHernandezMusic" target="_blank">
          Youtube
        </Link>
        , and even with{' '}
        <Link href="https://floridaorchestra.org/orchestra-of-lights/" target="_blank">
          The Florida Orchestra
        </Link>
        .
      </Paragraph>
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: [0, 0, 0, 3],
          paddingBottom: [0, 0, 0, 3],
          width: [0, '100%'],
          opacity: [0, 'unset'],
          height: [0, '100%'],
        }}
      >
        <Iframe
          src="https://www.youtube.com/embed/nfnEsxo40Qs"
          title="YouTube video - Star Trek: The Light Show"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </Flex>
      <Paragraph>
        At home, Ashley shares a special bond with Ninja, a beloved munchkin cat who adds joy and
        comfort to daily life. With a blend of technical prowess, leadership skills, and diverse
        hobbies, Ashley is a well-rounded individual, ready to take on new challenges and make a
        difference in the world of technology as the next chapter unfolds in the Pacific Northwest.
      </Paragraph>
      <Grid
        gap={2}
        columns={[1, 1, 3, 3]}
        sx={{
          alignItems: ['center', 'center', 'center', 'start'],
          justifyItems: 'center',
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        <Image alt="Ninja, an orange munchkin cat" src="ninjaonbed.jpeg" sx={imageSx} />
        <Image alt="Hiking in Pedernales Falls State Park" src="texashike.jpeg" sx={imageSx} />
        <Image alt="Holiday Phontonic's Light Show" src="christmaslights.jpeg" sx={imageSx} />
      </Grid>
      <Paragraph>
        {
          "To learn more about Ashley's story, explore her career achievements, or get in touch, be "
        }
        sure to visit her other pages:
        <Flex
          sx={{
            flexDirection: ['column', 'row'],
            justifyContent: ['center', 'space-evenly'],
            marginTop: 3,
          }}
        >
          <Flex
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconButton
              aria-label="About"
              as={NavigationLink}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              to="/about"
              sx={iconButtonSx}
              variant="transparent"
            >
              <FontAwesomeIcon icon={faAddressCard} size="xl" />
            </IconButton>
            <NavigationLink sx={navigationLinkSx} to="/about" variant="nav">
              About
            </NavigationLink>
          </Flex>
          <Flex
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconButton
              aria-label="Career"
              as={NavigationLink}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              to="/career"
              sx={iconButtonSx}
              variant="transparent"
            >
              <FontAwesomeIcon icon={faClipboardList} size="xl" />
            </IconButton>
            <NavigationLink sx={navigationLinkSx} to="/career" variant="nav">
              Career
            </NavigationLink>
          </Flex>
          <Flex
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconButton
              aria-label="Contact"
              as={NavigationLink}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              to="/contact"
              sx={iconButtonSx}
              variant="transparent"
            >
              <FontAwesomeIcon icon={faEnvelope} size="xl" />
            </IconButton>
            <NavigationLink sx={navigationLinkSx} to="/contact" variant="nav">
              Contact
            </NavigationLink>
          </Flex>
        </Flex>
      </Paragraph>
    </>
  );
}

export default Home;
