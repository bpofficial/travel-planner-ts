import React from "react";
// import { connect } from 'react-redux';

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Grid from "@material-ui/core/Grid";
import { createStyles, withStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { Typography } from "@material-ui/core";

import TripClassChild from "./ClassChild/";
import { IProps as CCProps } from "./ClassChild/";
// import { Props as ClassChildProps } from './ClassChild/';

const styles = (/*{ palette, spacing }: Theme*/) => createStyles({
    details: {
        padding: "8px 12px 24px 12px",
        width: "100%",
    },
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

interface IProps {
    icon: any;
    name: string;
    data: any;
    classes: {
        root: string,
        details: string,
        summaryWrapper: string,
    };
}

class TripClassContainer extends React.Component<IProps> {

    public shouldComponentUpdate(nextProps, nextState): boolean {
        return ( this.props === nextProps || this.state === nextState) ? true : false;
    }

    public render(): JSX.Element {
        const { classes } = this.props;
        return (
            <Grid item={true} lg={12} style={{ width: "100%" }}>
                <ExpansionPanel className={classes.root} square={true}>
                    <ExpansionPanelSummary
                        className={classes.root}
                        expandIcon={<ExpandMoreIcon style={{ padding: "0px" }} />}
                    >
                        <div className={classes.summaryWrapper}>
                            {this.props.icon}
                            <Typography style={{ width: "100%" }} variant="subtitle1" inline={true}>
                                {this.props.name}
                            </Typography>
                        </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.details} >
                        <Grid container={true} style={{width: "100%"}}>
                            {this.props.data.map((d: CCProps["info"], y) => (<TripClassChild key={y} info={d} />))}
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Grid>
        );
    }
}

export default withStyles(styles)(TripClassContainer);
