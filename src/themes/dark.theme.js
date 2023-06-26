import { createTheme } from "@mui/material";
import { blueGrey, cyan, pink } from "@mui/material/colors";

export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: "#FF7F11",
      },
      secondary: {
        main: cyan["A400"],
      },
      background: {
        default: blueGrey['800'],
        paper: blueGrey['700'],
      }
    },
  });
