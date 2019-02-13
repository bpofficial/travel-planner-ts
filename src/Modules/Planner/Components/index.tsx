import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PaperLeft from 'Modules/Paper/Components/PaperLeft/';
import PaperRight from 'Modules/Paper/Components/PaperRight/';

const styles = (/*{ palette, spacing }: Theme*/) => createStyles({
    root: {
        flexGrow: 1,
        paddingLeft: '5%',
        paddingTop: '1%',
        paddingRight: '5%',
        position: 'relative'
    },
    paperLeft: {
        position: 'relative',
        padding: '2vh',
        margin: 'auto',
        minWidth: '32vw',
        maxWidth: '32vw',
        width: '100%',
        minHeight: '80vh',
        maxHeight: '80vh',
        height: '100%',
        float: 'left',
        borderRadius: '0px',
        overflow: 'auto'
    },
    paperRight: {
        margin: 'auto',
        //padding: '2vh',
        minWidth: '55vw',
        maxWidth: '55vw',
        minHeight: '80vh',
        maxHeight: '80vh',
        //width: '100%',
        //height: '100%',
        float: 'right',
        borderRadius: '0px'
    },
    titleOutline: {
        display: 'inline-block',
        borderStyle: 'dashed',
        borderColor: 'grey',
        borderRadius: '4px',
        paddingLeft: '5px',
        paddingRight: '5px'
    }
});

type Props = {
    classes: {
        root: string,
        paperLeft: string,
        paperRight: string,
        titleOutline: string
    }
}

class Itinerary extends React.Component<Props> { 
    public render(): JSX.Element {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Typography component="h2" variant="display3" gutterBottom>
                    <div className={classes.titleOutline}>Travel</div>&nbsp;Planner
                </Typography>
                <Grid>
                    <PaperLeft className={classes.paperRight} />
                    <PaperRight className={classes.paperLeft} />
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Itinerary);