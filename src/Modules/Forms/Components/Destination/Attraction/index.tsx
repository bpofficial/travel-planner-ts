
import React, { Component } from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import { createStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import theme from "../../../../../Themes/";

import AutoCompleteWrapper from "mui-places-autocomplete";

import { reverseGeo } from "Modules/Shared/Geo/";

const mapStateToProps = (state) => {
    return {
        mapClick: state.formMap.click,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        newMarker: (geometry) => {
            dispatch({
                data: geometry,
                type: "NEW_MARKER",
            });
        },
    };
};

// tslint:disable: no-console
const styles = (/*{ palette, spacing }: Theme*/) => createStyles({
    container: {
        alignContent: "flex-start",
        height: "100%",
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
    maps: any;
    newMarker: any;
}

interface IState {
    child?: JSX.ElementClass | JSX.Element;
    budget: {
        error: boolean,
        helper: string,
    };
    stay: {
        error: boolean,
        helper: string,
    };
}

export class Attraction extends Component<IProps, IState> {

    constructor(props) {
        super(props);
        this.state = {
            budget: {
                error: false,
                helper: "",
            },
            stay: {
                error: false,
                helper: "",
            },
        };
    }

    public shouldComponentUpdate(nextProps, nextState): any {
        if (nextProps !== this.props || nextState !== this.state) {
            return true;
        }
    }

    public render() {

        const { classes } = this.props;
        const searchBar = (
            <TextField
                className={classes.textField}
                style={{width: "100%"}}
                id="standard-required"
                label="Where is it?"
                margin="normal"
                variant="outlined"
                InputProps={{endAdornment: <InputAdornment position="end">Search</InputAdornment>}}
                required={true}
            />
        );

        return (
            <div style={{width: "100%"}}>
                <Grid item={true} lg={12} className={classes.content} style={{width: "100%"}}>
                    <TextField
                        className={classes.textField}
                        style={{width: "100%"}}
                        id="standard-required"
                        label="What is it called?"
                        defaultValue=""
                        margin="normal"
                        variant="outlined"
                        required={true}
                    />
                </Grid>
                <Grid container={true} lg={12}>
                    <Grid item={true} className={classes.content}>
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
                            InputProps={{endAdornment: <InputAdornment position="end">AUD/pp</InputAdornment>}}
                            required={true}
                        />
                    </Grid>
                    <Grid item={true} className={classes.content}>
                        <TextField
                            className={classes.textField}
                            id="standard"
                            label="How long are you visiting?"
                            defaultValue=""
                            margin="normal"
                            variant="outlined"
                            style={{float: "right", margin: "auto"}}
                            onChange={this.stayChange}
                            error={this.state.stay.error}
                            helperText={this.state.stay.helper}
                            InputProps={{endAdornment: <InputAdornment position="end">Days</InputAdornment>}}
                        />
                    </Grid>
                </Grid>
                <AutoCompleteWrapper
                    onSuggestionSelected={this.onSuggestionSelected}
                    textFieldProps={searchBar.props}
                    places={this.props.maps.places}
                    // tslint:disable-next-line: jsx-no-lambda no-unused-expression
                    renderTarget={() => { searchBar; }}
                />
            </div>
        );
    }

    private onSuggestionSelected = (event) => {
        reverseGeo(event, this.props.maps, true);
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(Attraction));
