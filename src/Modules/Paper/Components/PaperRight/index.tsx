import React from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Nav from 'Modules/Planner/Components/Nav/';

const mapStateToProps = (state: {componentChange: Array<JSX.Element>}) => {
    return {
        component: state.componentChange[0]['littleComponent']
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

export default connect(mapStateToProps)(paperRight);