import React from 'react';
import { hot } from 'react-hot-loader';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../Redux/Reducers/';

const store = createStore(rootReducer);

class App extends React.Component <{}> {

    public render(): JSX.Element {
        return (
            <div>
                <Provider store={store} >
                    hello
                </Provider>
            </div>
        );
    }
}

export default hot(module)(App);