import React from "react";
import { connect } from "react-redux";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Grid from "@material-ui/core/Grid";
import { createStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TravelIcon from "@material-ui/icons/Flight";
import AccommodationIcon from "@material-ui/icons/Hotel";
import AttractionsIcon from "@material-ui/icons/Terrain";

import Budget from "Modules/Planner/Components/Budget/";
import TripClassContainer from "Modules/Planner/Components/Trip/";

const mapStateToProps = ( state: {tripDetails: { tripData: any[] }} ) => {
    return {
        data: state.tripDetails,
    };
};

const styles = (/*{ palette, spacing }: Theme*/) => createStyles({
    root: {
        borderRadius: "0px",
        fontSize: "2vh",
        lineHeight: "3vh",
        margin: "0.2vh 0vh",
        maxWidth: "100%",
        minHeight: "6vh",
        minWidth: "100%",
        padding: "0px",
        width: "100%",
    },
});

const elevation = {
    off: 1,
    on: 8,
};

interface IProps {
    data: any[];
    classes: {
        root: string,
    };
}

interface IState {
    elevation: any[];
}

class Planner extends React.Component<IProps, IState> {

    constructor(props) {
        super(props);
        this.state = {
            elevation: this.props.data.map(() => elevation.off),
        };
    }

    public render(): JSX.Element {
        const { classes } = this.props;
        return (
            <Grid container={true} spacing={0} style={{ justifyContent: "center"}}>
                {this.props.data.map((location, i) => {
                    return (
                        <ExpansionPanel
                            key={i}
                            className={classes.root}
                            onMouseOver={() => {this.onMouseOver(i); }}
                            onMouseOut={() => {this.onMouseOut(); }}
                            elevation={this.state.elevation[i]}
                            square={true}
                        >
                            <ExpansionPanelSummary className={classes.root} expandIcon={<ExpandMoreIcon />}>
                                <div style={{ width: "9vw", marginTop: "0.5vh", paddingLeft: "2vw" }}>
                                    <Typography align="left" component="h2" variant="display1">
                                        {location.name}
                                    </Typography>
                                </div>
                                <Budget info={location.price} />
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Grid container={true} spacing={8} >
                                    <TripClassContainer
                                        data={location.stay.attractions}
                                        icon={<AttractionsIcon />}
                                        name="Attractions"
                                    />
                                    <TripClassContainer
                                        data={location.stay.accommodation}
                                        icon={<AccommodationIcon />}
                                        name="Accommodation"
                                    />
                                    <TripClassContainer
                                        data={location.stay.travel}
                                        icon={<TravelIcon />}
                                        name="Travel"
                                    />
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    );
                })}
            </Grid>
        );
    }

    private onMouseOver(i: number) {
        if ( this.state.elevation[i] === elevation.on ) { return; }
        this.setState({
            elevation: this.state.elevation.map((_X, y) => (y === i) ? elevation.on : elevation.off),
        });
    }

    private onMouseOut = () => {
        this.setState({
            elevation: this.state.elevation.map(() => elevation.off),
        });
    }
}
/** @component */
export default connect(mapStateToProps)(withStyles(styles)(Planner));
