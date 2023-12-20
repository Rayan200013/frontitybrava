// theme.js
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  // Your theme configuration
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    // More theme options...
  },
});

const MaterialThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default MaterialThemeProvider;
