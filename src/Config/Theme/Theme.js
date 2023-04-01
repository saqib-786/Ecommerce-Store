import { createTheme } from "@mui/material";
import { lightBlue } from "@mui/material/colors";

const theme = createTheme({
    palette:{
        primary: {
            main: lightBlue[500],
            contrastText: '#fff',
          },
          secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
          },
      
    },
    Typography:{
        fontFamily: 'Poppins',
        color: lightBlue[500],
        fontSize:'40px'
    }
})


export default theme;