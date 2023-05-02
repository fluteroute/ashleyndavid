import React from 'react';
import Avatar from './Avatar';
import ContentCard from './ContentCard';
import { Flex } from './base';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import NavigationLink from './NavigationLink';

export type LayoutProps = {
  children: React.ReactNode;
};

export function Layout(props: LayoutProps) {
  const { ...other } = props;
  const location = useLocation();

  const title =
    location.pathname !== '/'
      ? location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2)
      : 'Ashley David';
  const careerDescription =
    location.pathname === '/career' ? (
      <>
        {"This is a shortened version of Ashley's resume. Please reach out via the "}
        <NavigationLink to="/contact" sx={{ fontStyle: 'italic', fontSize: '16px' }}>
          {"Contact's"}
        </NavigationLink>{' '}
        page for a full digital copy.
      </>
    ) : undefined;
  const homeDescription =
    location.pathname === '/'
      ? `"Transforming software landscapes: Merging creativity, expertise, and growth for exceptional results."`
      : undefined;

  const variant = location.pathname !== '/' ? 'main' : 'home';

  // Scroll to the top when route changes
  React.useEffect(() => {
    // Mobile
    document.getElementsByClassName('App')[0]?.scrollTo({
      top: 0,
      left: 0,
    });
  }, [location.pathname]);

  return (
    <Flex
      className="App"
      sx={{
        backgroundImage: [
          'linear-gradient(173deg, #1B1F3A 30%, #53354A 73.72%, #91403A 101.44%)',
          'linear-gradient(173deg, #1B1F3A 30%, #53354A 73.72%, #91403A 101.44%)',
          'linear-gradient(173deg, #1B1F3A 30%, #53354A 73.72%, #91403A 101.44%)',
          'linear-gradient(113.91deg, #1B1F3A 34.95%, #53354A 69.17%, #91403A 91.51%)',
        ],
        height: '100vh',
        paddingTop: [0, 0, 0, 80],
        paddingBottom: 0,
        width: '100vw',
        overflow: 'scroll',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: ['space-between', 'space-between', 'space-between', 'center'],

        '.page-enter': {
          opacity: 0,
          transform: 'scale(1.1)',
        },
        '.page-enter-active': {
          opacity: 1,
          transform: 'scale(1)',
          transition: 'opacity 300ms, transform 300ms',
        },
        '.page-exit': {
          opacity: 1,
          transform: 'scale(1)',
        },
        '.page-exit-active': {
          opacity: 0,
          transform: 'scale(0.9)',
          transition: 'opacity 300ms, transform 300ms',
        },
      }}
    >
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
            marginLeft: '20px',
            paddingRight: '20px',
            marginTop: [
              variant !== 'home' ? -190 : -215,
              variant !== 'home' ? -200 : -222,
              -248,
              0,
            ],
            paddingBottom: [0, 0, 0, 80],
            maxWidth: ['unset', 'unset', 'unset', 1600],
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
    </Flex>
  );
}

export default Layout;
