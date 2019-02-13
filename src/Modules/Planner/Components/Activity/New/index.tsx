import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { withStyles, createStyles } from '@material-ui/core/styles';

const styles = (/*{ palette, spacing }: Theme*/) => createStyles({
    container: {
        minWidth: '55vw',
        maxWidth: '55vw',
        width: '100%',
        minHeight: '80vh', 
        maxHeight: '80vh',
        height: '100%',
        position: 'relative'
    },
    content: {
        position: 'relative',
        width: '100%'
    },
    textField: {
        width: '50%'
    }
})

interface Props {
    classes: {
        container: string,
        content: string,
        textField: string
    }
}

class New extends Component<Props> {    
    render() {

        const { classes } = this.props;

        return (
            <Grid container spacing={0} className={classes.container}>
                <div className={classes.content}>
                    <TextField
                        className={classes.textField}
                        id="standard-required"
                        label="Required"
                        defaultValue=""
                        margin="normal"
                        variant="outlined"
                        required
                    />
                </div>
            </Grid>
        )
    }
}

export default withStyles(styles, { withTheme: true })(New);
