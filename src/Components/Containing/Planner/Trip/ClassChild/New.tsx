import React from 'react';

import { withStyles, createStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import EditButton from '../../../../Functional/Planner/Buttons/Edit/';

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

export type Props = {
    classes: {
        root: string,
        summaryWrapper: string
    }
}

class NewClassChild extends React.Component<Props> {
    render() {

        const { classes } = this.props;

        return (
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
        )
    }
}

export default withStyles(styles)(NewClassChild);