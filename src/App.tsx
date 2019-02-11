import React from 'react';
import { hot } from 'react-hot-loader';

export interface AppPropsInterface {}
export interface AppStateInterface {
    counter: number;
}

class App extends React.Component<AppPropsInterface, AppStateInterface> {
    state = {
        counter: 0
    };

    private incrementCounter = (
        event: React.MouseEvent<HTMLButtonElement>
    ): void => {
        this.setState({ counter: this.state.counter + 1 });
    };

    public render(): JSX.Element {
        return (
            <div>
                Counter: {this.state.counter}
                <br />
                <button onClick={this.incrementCounter}>add</button>
            </div>
        );
    }
}
console.log('app loaded')
export default hot(module)(App);