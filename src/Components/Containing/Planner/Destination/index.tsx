import React from 'react';

import Grid from '@material-ui/core/Grid';
import { withStyles, createStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import AddButton from '../../../Functional/Planner/Buttons/Add/';
import EditButton from '../../../Functional/Planner/Buttons/Edit/';
import { Typography } from '@material-ui/core';

const styles = (/*{ palette, spacing }: Theme*/) => createStyles({
    root: {
        minWidth: '100%', 
        maxWidth: '100%',
        minHeight: '2vh', 
        width: '100%',
        borderRadius: '0px',
        margin: '0.1vh 0vh',
        lineHeight: '2vh',
        fontSize: '1.8vh',
        padding: '0px'
    },
    details: {
        width: '100%',
        padding: '8px 12px 24px 12px'
    },
    summaryWrapper: {
        width: '45%',
        margin: 'auto 1vw'
    }
})

type Props = {
    icon: any,
    name: string,
    data: Array<any>,
    classes: {
        root: string,
        details: string,
        summaryWrapper: string
    }
}

class DestinationContainer extends React.Component<Props> {

    public render(): JSX.Element {
        const { classes } = this.props;
        return (
            <Grid item lg={12} style={{ width: '100%' }}>
                <ExpansionPanel className={classes.root} square>
                    <ExpansionPanelSummary className={classes.root} expandIcon={<ExpandMoreIcon style={{ padding: '0px' }} />}>
                        <div className={classes.summaryWrapper}>
                            {this.props.icon} <Typography style={{ width: '100%' }} variant="subtitle1" inline> {this.props.name} </Typography>
                        </div> 
                        <AddButton />
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.details} >
                        {this.props.data.map((details, y) => {
                            return (
                                <ExpansionPanel key={y} className={classes.root} square>
                                    <ExpansionPanelSummary className={classes.root} expandIcon={<ExpandMoreIcon />}>
                                        <div className={classes.summaryWrapper}>
                                            {details.name}
                                        </div> 
                                        <EditButton />
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        Details
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            )
                        })}
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Grid>
        )
    }
}

export default withStyles(styles)(DestinationContainer);