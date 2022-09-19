import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";

function ThemeWrapper({ children }) {
  const themeMode = useSelector((state) => state.globalUiValues.mode);
  const myTheme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        light: "#000",
        dark: "#000",
        main: "#000",
      },
    },
  });
  const responsiveTheme = responsiveFontSizes(myTheme);

  return (
    <ThemeProvider theme={responsiveTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default ThemeWrapper;
