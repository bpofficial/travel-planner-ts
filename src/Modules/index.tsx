import React from 'react';
import { hot } from 'react-hot-loader';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../Redux/Reducers';

import Containers from './Planner/Components';
import { MuiThemeProvider } from '@material-ui/core';

import 'bootstrap/dist/css/bootstrap.min.css';
import theme from '../Themes';

const store = createStore(rootReducer);


class App extends React.Component <{}> {

    public render(): JSX.Element {
        return (
            <MuiThemeProvider theme={theme} >
                <Provider store={store} >
                    <Containers />
                </Provider>
            </MuiThemeProvider>
        );
    }
}

export default hot(module)(App);