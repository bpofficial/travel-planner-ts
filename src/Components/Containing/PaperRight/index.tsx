import React from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
//import PlannerNav from '../../../../functional/misc/bottomNav/';

const mapStateToProps = (state: {componentChange: Array<any>}) => {
    return {
        component: state.componentChange[0].littleComponent
    }
}

class index extends React.Component<{className: string, component: JSX.ElementClass}> {

    render() {
        return (
            <Paper className={this.props.className} >
                {this.props.component}
                {''/*<PlannerNav />*/}
            </Paper>
        )
    }
}

export default connect(mapStateToProps)(index);