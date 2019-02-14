import React from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Nav from 'Modules/Navigation/Components/Planner';

const mapStateToProps = (state: { componentReducer: { littleComponent: any }}) => {
    console.log(state.componentReducer)
    return {
        component: state.componentReducer.littleComponent
    }
}

class paperRight extends React.Component<{className: string, component: JSX.ElementClass}> {

    render() {
        return (
            <Paper className={this.props.className} >
                {this.props.component}
                <Nav />
            </Paper>
        )
    }
}
/** @component */
export default connect(mapStateToProps)(paperRight);