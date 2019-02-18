import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state: { componentReducer: { bigComponent: any }}) => {
    return {
        component: state.componentReducer.bigComponent,
    };
};

class PaperLeft extends React.Component<{className: string, component: JSX.ElementClass}> {
    public render() {
        return (
            <Paper className={this.props.className}>
                <Grid container={true} spacing={0} style={{ height: "80vh" }}>
                    {this.props.component}
                </Grid>
            </Paper>
        );
    }
}

export default connect(mapStateToProps)(PaperLeft);
