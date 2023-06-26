import { createTheme } from "@mui/material";
import { cyan, pink } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
       main: "#FF7F11",
    },
    secondary: {
      main: cyan["A400"],
    },
  },
});
