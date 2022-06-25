import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from 'react-router-dom';
import Routes from "./routes/Routes";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  ".MuiInputBase-input-MuiOutlinedInput-input": {
    height: "1em",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}


export default App;
