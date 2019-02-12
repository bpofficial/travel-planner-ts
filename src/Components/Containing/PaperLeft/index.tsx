import React from 'react';
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const mapStateToProps = (state: {componentChange: Array<JSX.Element>}) => {
    return {
        component: state.componentChange[0]['bigComponent']
    }
}

class index extends React.Component<{className: string, component: JSX.ElementClass}> {
    render() {
        return (
            <Paper className={this.props.className}>
                <Grid container spacing={0} style={{ height: '80vh' }}>
                    {this.props.component}
                </Grid>
            </Paper>
        )
    }
}

export default connect(mapStateToProps)(index);