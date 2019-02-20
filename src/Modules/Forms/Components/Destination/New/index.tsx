import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Select from "@material-ui/core/Select";
import { createStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import theme from "../../../../../Themes/";
import GoogleMap from "../../../../Map/Components/Main/";

import Accommodation from "../Accommodation/";
import Attraction from "../Attraction/";
import Travel from "../Travel/";

const SubmitButton = withStyles({
    outlinedPrimary: {
        border: "3px dashed " + theme.palette.primary.main,
        color: "#757575",
    },
    root: {
        borderRadius: "4px",
        float: "right",
        height: 48,
        margin: "auto",
        padding: "0 30px",
    },
})(Button);

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
}

interface IState {
    class: string;
    child?: JSX.ElementClass | JSX.Element;
}

class New extends Component<IProps, IState> {

    constructor(props) {
        super(props);
        this.state = {
            child: <Attraction />,
            class: "attractions",
        };
    }

    public render() {

        const { classes } = this.props;

        return (
            <Grid container={true} className={classes.container} >
                <Grid item={true} spacing={0} lg={12}>
                    <Typography component="h4" variant="display1" style={{height: "10%", width: "100%"}}>
                        <div className={classes.titleOutline}>Create</div>&nbsp;New Activity
                        <SubmitButton variant="outlined" color="primary">
                            Submit
                        </SubmitButton>
                    </Typography>
                </Grid>
                <Grid item={true} lg={12} sm={12} md={12} style={{alignContent: "flex-start", height: "68px"}}>
                    <FormControl
                        required={true}
                        variant="outlined"
                        style={{width: "100%", margin: "0px"}}
                        margin="normal"
                    >
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
                </Grid>
                {this.state.child}
                <Grid
                    item={true}
                    lg={12}
                    style={{height: "52%", paddingTop: "2%"}}
                >
                    <GoogleMap styles={{width: "100%", height: "100%", borderRadius: "5px"}}/>
                </Grid>
            </Grid>
        );
    }

    private handleChange = (event) => {
        this.setState({
            ...this.state,
            child: (event.target.value === "attractions") ?
                <Attraction /> : (event.target.value === "accommodation") ?
                <Accommodation /> : (event.target.value === "travel") ?
                <Travel /> : undefined,
            class: event.target.value,
        });
    }

}

export default withStyles(styles, { withTheme: true })(New);
