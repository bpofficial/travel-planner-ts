import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles, createStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import theme from '../../../../../Themes/';
import GoogleMap from '../../../../Map/Components/Main/';

const styles = (/*{ palette, spacing }: Theme*/) => createStyles({
    container: {
        minWidth: '55vw',
        maxWidth: '55vw',
        width: '100%',
        minHeight: '80vh', 
        maxHeight: '80vh',
        //height: '100%',
        position: 'relative',
        padding: '2%'
    },
    titleGrid: {
        position: 'relative',
        width: '100%',
        height: '10%'
    },
    titleOutline: {
        display: 'inline-block',
        borderStyle: 'dashed',
        borderColor: theme.palette.primary.main,
        borderRadius: '4px',
        paddingLeft: '5px',
        paddingRight: '5px'
    },
    content: {
        position: 'relative',
        width: '50%',
        display: 'inline-block'
    },
    textField: {
        width: '98%',
        height: '7vh',
        margin: '0px'
    }
})

interface Props {
    classes: {
        container: string,
        titleGrid: string,
        titleOutline: string,
        content: string,
        textField: string
    }
}

interface State {
    class: string,
    budget: {
        error: boolean,
        helper: string
    },
    stay: {
        error: boolean,
        helper: string
    }
}

class New extends Component<Props, State> {    

    constructor(props) {
        super(props)
        this.state = {
            class: '',
            budget: {
                error: false,
                helper: ''
            },
            stay: {
                error: false,
                helper: ''
            }
        }
    }
      
    handleChange = (event) => {
        this.setState({
            ...this.state,
            class: event.target.value,
        });
    }

    budgetChange = (event) => {
        if(isNaN(event.target.value) || Number(event.target.value) < 0 ) {
            this.setState({
                ...this.state,
                budget: {
                    error: true,
                    helper: 'Requires a positive number'
                }
            })
        } else {
            this.setState({
                ...this.state,
                budget: {
                    error: false,
                    helper: ''
                }
            })
        }
    }

    stayChange = (event) => {
        if(isNaN(event.target.value) || Number(event.target.value) < 0 ) {
            this.setState({
                ...this.state,
                stay: {
                    error: true,
                    helper: 'Requires a positive number'
                }
            })
        } else {
            this.setState({
                ...this.state,
                stay: {
                    error: false,
                    helper: ''
                }
            })
        }
    }

    render() {

        const { classes } = this.props;

        return (
            <Grid container className={classes.container}>
                <Grid item className={classes.titleGrid}>
                    <Typography component="h4" variant="display1">
                        <div className={classes.titleOutline}>Create</div>&nbsp;New Activity
                    </Typography>
                    <Divider variant="middle" style={{marginTop:'1%'}}/>
                </Grid>
                <Grid container style={{height:'20%',marginTop:'-30%'}}>
                    <Grid item lg={12} >
                        <FormControl required variant="outlined" style={{width:'100%', paddingBottom:'1%'}}>
                            <InputLabel htmlFor="outlined-age-simple">
                                What is the activity?
                            </InputLabel>
                            <Select value={this.state.class} onChange={this.handleChange} input={<OutlinedInput labelWidth={150} name="age" id="outlined-age-simple" />}>
                                <MenuItem value={'attractions'}>An attraction</MenuItem>
                                <MenuItem value={'accommodation'}>Accommodation</MenuItem>
                                <MenuItem value={'travel'}>Travel</MenuItem>
                            </Select>
                        </FormControl>
                        <Divider variant="middle" style={{marginTop:'1%'}}/>
                    </Grid>
                    <Grid item lg={12} style={{paddingTop:'2%',width:'100%'}}>
                        <div className={classes.content} style={{width:'100%'}}>
                            <TextField
                                className={classes.textField}
                                style={{width:'100%'}}
                                id="standard-required"
                                label="What will you call the activity?"
                                defaultValue=""
                                margin="normal"
                                variant="outlined"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">&nbsp;</InputAdornment>,
                                }}
                                required
                            />
                        </div>
                        <Divider variant="middle" style={{marginTop:'1%'}}/>
                    </Grid>
                    <Grid item lg={12} style={{paddingTop:'2%'}}>
                        <div className={classes.content}>
                            <TextField
                                className={classes.textField}
                                id="standard-required"
                                label="What is the total budget/cost?"
                                defaultValue=""
                                margin="normal"
                                variant="outlined"
                                style={{float:'left',margin:'auto'}}
                                onChange={this.budgetChange}
                                error={this.state.budget.error}
                                helperText={this.state.budget.helper}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">AUD</InputAdornment>,
                                }}
                                required
                            />
                        </div>
                        <div className={classes.content}>
                            <TextField
                                className={classes.textField}
                                id="standard"
                                label="How long are you staying/visiting?"
                                defaultValue=""
                                margin="normal"
                                variant="outlined"
                                style={{float:'right',margin:'auto'}}
                                onChange={this.stayChange}
                                error={this.state.stay.error}
                                helperText={this.state.stay.helper}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">days</InputAdornment>,
                                }}
                                
                            />
                        </div>
                        <Divider variant="middle" style={{marginTop:'1%'}}/>
                    </Grid>
                    <Grid item lg={12} style={{paddingTop:'2%',height:'100%'}}>
                        <GoogleMap styles={{width:'100%',height:'100%', borderRadius:'5px'}}/>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles, { withTheme: true })(New);
