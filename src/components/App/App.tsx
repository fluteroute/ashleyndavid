import React from 'react';
import { Box, ThemeProvider } from '../base';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useLocation, useOutlet } from 'react-router-dom';
import { Layout } from '..';
import { routes } from '../..';

function App() {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {};

  return (
    <ThemeProvider>
      <Layout>
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            {(state) => (
              <Box key={location.key} ref={nodeRef} className="page">
                {currentOutlet}
              </Box>
            )}
          </CSSTransition>
        </SwitchTransition>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
