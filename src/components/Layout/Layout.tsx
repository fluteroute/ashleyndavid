import React from 'react';
import { Avatar, ContentCard, Footer, Image, NavigationLink } from '../';
import { Flex } from '../base';

export type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export function Layout(props: LayoutProps) {
  const { title, ...other } = props;
  const careerDescription =
    title === 'Career' ? (
      <>
        {"This is a shortened version of Ashley's resume. Please reach out via the "}
        <NavigationLink to="/contact" sx={{ fontStyle: 'italic', fontSize: '16px' }}>
          {'Contact'}
        </NavigationLink>{' '}
        page for a pdf.
      </>
    ) : undefined;
  const homeDescription =
    title === 'Ashley David'
      ? 'Transforming software landscapes: Merging creativity, expertise, and growth for exceptional results.'
      : undefined;

  const variant = title !== 'Ashley David' ? 'main' : 'home';
  return (
    <>
      <Image
        alt="Arch"
        src="arch.svg"
        sx={{
          position: ['relative', 'relative', 'relative', 'absolute'],
          zIndex: 0,
          top: variant !== 'home' ? ['0em', '1em', '3em', '0em'] : ['0em', '1em', '0em', '0em'],
          left: ['-5em', '-17em', '-19em', '0em'],
          boxShadow: 'none',
          height: '100%',
          width: [225, 300, 300, 550],
          transform: 'scaleX(-1)',
        }}
      />
      <Flex
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: ['space-between', 'space-between', 'space-between', 'center'],
        }}
      >
        <Flex
          sx={{
            flexDirection: ['column', 'column', 'column', 'row'],
            marginLeft: ['20px', '20px', '20px', '220px'],
            marginRight: [0, 0, 0, '20px'],
            paddingRight: '20px',
            marginTop: [
              variant !== 'home' ? -410 : -452,
              variant !== 'home' ? -418 : -545,
              -548,
              0,
            ],
            height: ['100%', '100%', '100%', 'unset'],
          }}
        >
          <Avatar variant={variant} />
          <ContentCard
            description={careerDescription || homeDescription}
            variant={variant}
            title={title}
            {...other}
          />
        </Flex>
        <Footer />
      </Flex>
    </>
  );
}

export default Layout;
