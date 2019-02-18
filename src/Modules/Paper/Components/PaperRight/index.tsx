import Paper from "@material-ui/core/Paper";
import Nav from "Modules/Navigation/Components/Planner";
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state: { componentReducer: { littleComponent: any }}) => {
    return {
        component: state.componentReducer.littleComponent,
    };
};

class PaperRight extends React.Component<{className: string, component: JSX.ElementClass}> {

    public render() {
        return (
            <Paper className={this.props.className} >
                {this.props.component}
                <Nav />
            </Paper>
        );
    }
}

export default connect(mapStateToProps)(PaperRight);
