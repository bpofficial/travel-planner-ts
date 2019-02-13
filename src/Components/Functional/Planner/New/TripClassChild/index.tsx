import React from 'react';
//import { connect } from 'react-redux';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import EditButton from '../../../../Functional/Planner/Buttons/Edit/';

export interface Props {
    name: string,
    classes: {
        root: string,
        summaryWrapper: string
    }
}

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
    summaryWrapper: {
        width: '45%',
        margin: 'auto 1vw'
    }
})


class NewClassChild extends React.Component<Props> {

    render() {
        const { classes } = this.props;
        return (
            <Grid item style={{width:'100%'}}>
                <ExpansionPanel className={classes.root} square>
                    <ExpansionPanelSummary className={classes.root} expandIcon={<ExpandMoreIcon />}>
                        <div className={classes.summaryWrapper} >
                            Type here
                        </div> 
                        <EditButton />
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        Details here
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Grid>
        )
    }
}

export default withStyles(styles)(NewClassChild)