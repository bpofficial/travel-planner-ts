import React from "react";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import { createStyles, withStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import EditButton from "Modules/Planner/Components/Buttons/Edit/";

const styles = (/*{ palette, spacing }: Theme*/) => createStyles({
    root: {
        borderRadius: "0px",
        fontSize: "1.8vh",
        lineHeight: "2vh",
        margin: "0.1vh 0vh",
        maxWidth: "100%",
        minHeight: "2vh",
        minWidth: "100%",
        padding: "0px",
        width: "100%",
    },
    summaryWrapper: {
        margin: "auto 1vw",
        width: "45%",
    },
});

export interface IProps {
    key: number;
    info: {
        name: string, // | JSX.ElementClass | JSX.Element,
        details: string, // | JSX.ElementClass | JSX.Element
    };
    classes: {
        root: string,
        summaryWrapper: string,
    };
}

export class Container extends React.Component<IProps> {
    public render() {
        const { classes, info } = this.props;
        return (
            <ExpansionPanel key={this.props.key} className={classes.root} square={true}>
                <ExpansionPanelSummary className={classes.root} expandIcon={<ExpandMoreIcon/>} >
                    <div className={classes.summaryWrapper} >
                        {info.name}
                    </div>
                    <EditButton />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    {info.details || " "}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

export default withStyles(styles)(Container);
