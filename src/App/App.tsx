import { Box, ThemeProvider } from "../components/base";
import React from "react";

function App() {
  return (
    <ThemeProvider>
      <Box
        className="App"
        sx={{
          backgroundImage:
            "linear-gradient(to bottom right,#1b1f3a,#53354a,#a64942)",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </ThemeProvider>
  );
}

export default App;
