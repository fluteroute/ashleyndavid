import React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useLocation, useOutlet } from 'react-router-dom';
import { AppWrapper } from './AppWrapper';
import { Box } from '../base';
import { Layout } from '../Layout';
import { routes } from '../../';

function App() {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {};

  // Scroll to the top when route changes
  React.useEffect(() => {
    // Mobile
    document.getElementsByClassName('App')[0]?.scrollTo({
      top: 0,
      left: 0,
    });
  }, [location.pathname]);

  return (
    <AppWrapper
      className="App"
      sx={{
        paddingTop: [0, 0, 0, 80],
        paddingBottom: 0,
        width: '100vw',
        overflow: 'scroll',
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
      <Layout
        title={
          location.pathname !== '/'
            ? location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2)
            : 'Ashley David'
        }
      >
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            {() => (
              <Box key={location.key} ref={nodeRef} className="page">
                {currentOutlet}
              </Box>
            )}
          </CSSTransition>
        </SwitchTransition>
      </Layout>
    </AppWrapper>
  );
}

export default App;
