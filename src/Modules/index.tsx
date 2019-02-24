import React from "react";
import { hot } from "react-hot-loader";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./Shared/Redux/rootReducer";

import { MuiThemeProvider } from "@material-ui/core";
import Container from "./Container/Components/Itinerly/";

import "bootstrap/dist/css/bootstrap.min.css";
import theme from "../Themes";

export const store = createStore(rootReducer);

class App extends React.Component <{}> {

    public render(): JSX.Element {
        return (
            <MuiThemeProvider theme={theme} >
                <Provider store={store} >
                    <Container />
                </Provider>
            </MuiThemeProvider>
        );
    }
}

export default hot(module)(App);
