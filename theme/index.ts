import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f60',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      contrastText: "#fff" // will be calculated to contrast with palette.primary.main
    },
    // secondary: {
    //   main: '#E0C2FF',
    //   light: '#F5EBFF',
    //   // dark: will be calculated from palette.secondary.main,
    //   contrastText: '#47008F',
    // },
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {}
      },

    }
  }
});

export default theme;