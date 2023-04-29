import React from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { Layout } from "../components";
import { Box, ThemeProvider } from "../components/base";

import { routes } from "..";

function App() {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};

  return (
    <ThemeProvider>
      <Layout>
        <Box ref={nodeRef}>{currentOutlet}</Box>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
