import { createMuiTheme } from "@material-ui/core";
import createPalette from "@material-ui/core/styles/createPalette";

const theme = createMuiTheme({
    palette: createPalette({
        primary: {
            contrastText: "#fff",
            dark: "#6691a4",
            light: "#83d7f6",
            main: "#00a1e0",
        },
        secondary: {
            contrastText: "#fff",
            dark: "#005e9c",
            light: "#005e9c",
            main: "#005e9c",
        },
    }),
});

export default theme;
