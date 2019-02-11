import { createMuiTheme } from '@material-ui/core';
import createPalette from '@material-ui/core/styles/createPalette';

const theme = createMuiTheme({
    palette: createPalette({
        primary: {
            light: '#83d7f6',
            main: '#00a1e0',
            dark: '#6691a4',
            contrastText: '#fff',
        },
        secondary: {
            light: '#005e9c',
            main: '#005e9c',
            dark: '#005e9c',
            contrastText: '#fff',
        }
    })
});

export default theme;