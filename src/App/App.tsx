import React from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { MainLayout } from "../components/layouts";
import { ThemeProvider } from "../components/base";

import { routes } from "..";

function App() {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};

  return (
    <ThemeProvider>
      <MainLayout>
        <div ref={nodeRef} className="container">
          {currentOutlet}
        </div>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
