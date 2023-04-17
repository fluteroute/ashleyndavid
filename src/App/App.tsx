import { Box, CatnipProvider } from "@fluteroute/catnip-ui";
import React from "react";

function App() {
  return (
    <CatnipProvider>
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
    </CatnipProvider>
  );
}

export default App;
