import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Poppins',
        useNextVariants: true
    },
    palette: {
        primary: {
            light: process.env.REACT_APP_COLOR_PRIMARY,
            main: process.env.REACT_APP_COLOR_PRIMARY,
            dark: process.env.REACT_APP_COLOR_SECONDARY,
            contrastText: '#fff',
        },
        secondary: {
            light: process.env.REACT_APP_COLOR_SECONDARY,
            main: process.env.REACT_APP_COLOR_SECONDARY,
            dark: process.env.REACT_APP_COLOR_PRIMARY,
            contrastText: '#fff',
        },
        danger: {
            color: '#FF595E',
        },
        warning: {
            color: '#FFBE0B'
        }, 
        success: {
            color: 'green'
        },
    }
});

export default theme;