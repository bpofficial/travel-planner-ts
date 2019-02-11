import React from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import { withStyles, createStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AttractionsIcon from '@material-ui/icons/Terrain';
import AccommodationIcon from '@material-ui/icons/Hotel';
import TravelIcon from '@material-ui/icons/Flight';

import Budget from '../../Containing/Planner/Budget/';
import Destination from '../../Containing/Planner/Destination/';

const mapStateToProps = ( state: { tripData: Array<any> } ) => {
    return {
        data: state.tripData
    }
}

const styles = (/*{ palette, spacing }: Theme*/) => createStyles({
    root: {
        minWidth: '100%', 
        maxWidth: '100%',
        width: '100%',
        minHeight: '6vh', 
        borderRadius: '0px',
        margin: '0.2vh 0vh',
        lineHeight: '3vh',
        fontSize: '2vh',
        padding: '0px'
    }
});

const elevation = {
    on: 8,
    off: 1
}

type Props = {
    data: Array<any>,
    classes: {
        root: string
    }
}

type State = {
    elevation: Array<any>
}

class Planner extends React.Component<Props, State> {

    constructor(props) {
        super(props)
        this.state = {
            elevation: this.props.data.map(() => { return elevation.off })
        }
    }

    private onMouseOver(i: number) {
        if( this.state.elevation[i] == elevation.on ) { return }
        this.setState({
            elevation: this.state.elevation.map((x, y) => { return (y == i) ? elevation.on : elevation.off })
        })
    } 

    private onMouseOut = () => {
        this.setState({
            elevation: this.state.elevation.map(() => { return elevation.off })
        })
    }

    public render(): JSX.Element {
        const { classes } = this.props;
        return (
            <Grid container spacing={0} style={{ justifyContent: 'center'}}>
                {this.props.data.map((location, i) => {
                    return (
                        <ExpansionPanel 
                            key={i} 
                            className={classes.root} 
                            onMouseOver={() => { this.onMouseOver(i)}}
                            onMouseOut={() => { this.onMouseOut()}}
                            elevation={this.state.elevation[i]} 
                            square
                        >
                            <ExpansionPanelSummary className={classes.root} expandIcon={<ExpandMoreIcon />}>
                                <div style={{ width: '9vw', marginTop: '0.5vh', paddingLeft: '2vw' }}>
                                    <Typography align="left" component="h2" variant="display1">
                                        {location.name}
                                    </Typography>
                                </div>
                                <Budget info={location.price} />
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Grid container spacing={8} >
                                    <Destination data={location.stay.attractions} icon={<AttractionsIcon />} name="Attractions" />
                                    <Destination data={location.stay.accommodation} icon={<AccommodationIcon />} name="Accommodation" />
                                    <Destination data={location.stay.travel} icon={<TravelIcon />} name="Travel" />
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    )
                })}
            </Grid>
        )
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Planner));