import React, { Component } from "react";

import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Select from "@material-ui/core/Select";
import { createStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import theme from "../../../../../Themes/";
import GoogleMap from "../../../../Map/Components/Main/";

const styles = (/*{ palette, spacing }: Theme*/) => createStyles({
    container: {
        maxHeight: "80vh",
        maxWidth: "55vw",
        minHeight: "80vh",
        minWidth: "55vw",
        padding: "2%",
        position: "relative",
        width: "100%",
    },
    content: {
        display: "inline-block",
        position: "relative",
        width: "50%",
    },
    textField: {
        height: "7vh",
        margin: "0px",
        width: "98%",
    },
    titleGrid: {
        height: "10%",
        position: "relative",
        width: "100%",
    },
    titleOutline: {
        borderColor: theme.palette.primary.main,
        borderRadius: "4px",
        borderStyle: "dashed",
        display: "inline-block",
        height: "10%",
        paddingLeft: "5px",
        paddingRight: "5px",
    },
});

interface IProps {
    classes: {
        container: string,
        titleGrid: string,
        titleOutline: string,
        content: string,
        textField: string,
    };
}

interface IState {
    class: string;
    budget: {
        error: boolean,
        helper: string,
    };
    stay: {
        error: boolean,
        helper: string,
    };
}

class New extends Component<IProps, IState> {

    constructor(props) {
        super(props);
        this.state = {
            budget: {
                error: false,
                helper: "",
            },
            class: "",
            stay: {
                error: false,
                helper: "",
            },
        };
    }

    public render() {

        const { classes } = this.props;

        return (
            <Grid container={true} className={classes.container}>
                <Grid container={true} style={{height: "100%"}}>
                    <Typography component="h4" variant="display1">
                        <div className={classes.titleOutline}>Create</div>&nbsp;New Activity
                    </Typography>
                    <Divider variant="middle" style={{marginTop: "1%"}}/>
                    <Grid item={true} lg={12} >
                        <FormControl required={true} variant="outlined" style={{width: "100%", paddingBottom: "1%"}}>
                            <InputLabel htmlFor="outlined-age-simple">
                                What is the activity?
                            </InputLabel>
                            <Select
                                value={this.state.class}
                                onChange={this.handleChange}
                                input={<OutlinedInput labelWidth={150} name="age" id="outlined-age-simple" />}
                            >
                                <MenuItem value={"attractions"}>An attraction</MenuItem>
                                <MenuItem value={"accommodation"}>Accommodation</MenuItem>
                                <MenuItem value={"travel"}>Travel</MenuItem>
                            </Select>
                        </FormControl>
                        <Divider variant="middle" style={{marginTop: "1%"}}/>
                    </Grid>
                    <Grid item={true} lg={12} style={{paddingTop: "2%", width: "100%"}}>
                        <div className={classes.content} style={{width: "100%"}}>
                            <TextField
                                className={classes.textField}
                                style={{width: "100%"}}
                                id="standard-required"
                                label="What will you call the activity?"
                                defaultValue=""
                                margin="normal"
                                variant="outlined"
                                InputProps={{endAdornment: <InputAdornment position="end">&nbsp;</InputAdornment>}}
                                required={true}
                            />
                        </div>
                        <Divider variant="middle" style={{marginTop: "1%"}}/>
                    </Grid>
                    <Grid item={true} lg={12} style={{paddingTop: "2%"}}>
                        <div className={classes.content}>
                            <TextField
                                className={classes.textField}
                                id="standard-required"
                                label="What is the total budget/cost?"
                                defaultValue=""
                                margin="normal"
                                variant="outlined"
                                style={{float: "left", margin: "auto"}}
                                onChange={this.budgetChange}
                                error={this.state.budget.error}
                                helperText={this.state.budget.helper}
                                InputProps={{endAdornment: <InputAdornment position="end">AUD</InputAdornment>}}
                                required={true}
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
                                style={{float: "right", margin: "auto"}}
                                onChange={this.stayChange}
                                error={this.state.stay.error}
                                helperText={this.state.stay.helper}
                                InputProps={{endAdornment: <InputAdornment position="end">days</InputAdornment>}}
                            />
                        </div>
                        <Divider variant="middle"/>
                    </Grid>
                    <Grid
                        item={true}
                        lg={12}
                        style={{paddingTop: "2%", height: "30%", width: "50%"}}
                    >
                        <GoogleMap styles={{width: "100%", height: "100%", borderRadius: "5px"}}/>
                    </Grid>
                </Grid>
            </Grid>
        );
    }

    private handleChange = (event) => {
        this.setState({
            ...this.state,
            class: event.target.value,
        });
    }

    private budgetChange = (event) => {
        if (isNaN(event.target.value) || Number(event.target.value) < 0 ) {
            this.setState({
                ...this.state,
                budget: {
                    error: true,
                    helper: "Requires a positive number",
                },
            });
        } else {
            this.setState({
                ...this.state,
                budget: {
                    error: false,
                    helper: "",
                },
            });
        }
    }

    private stayChange = (event) => {
        if (isNaN(event.target.value) || Number(event.target.value) < 0 ) {
            this.setState({
                ...this.state,
                stay: {
                    error: true,
                    helper: "Requires a positive number",
                },
            });
        } else {
            this.setState({
                ...this.state,
                stay: {
                    error: false,
                    helper: "",
                },
            });
        }
    }
}

export default withStyles(styles, { withTheme: true })(New);
