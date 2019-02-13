import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon1 from '@material-ui/icons/Add';
import Icon2 from '@material-ui/icons/Settings';
import Icon3 from '@material-ui/icons/SwapVert';
import Icon4 from '@material-ui/icons/ZoomIn';

import GoogleMap from 'modules/Map/Components/Container';
import { New as NewActivity } from 'Components/Functional/Planner/Activity/New';
//import Settings from '../../../containers/material_ui/containers/Settings/';

const styles = {
    bottomInfoWrapper: {
        position: 'absolute',
        //margin: 'auto auto 0px auto',
        bottom: 0,
        margin: 'auto auto auto -2vh',
        width: '100%',
        height: '8vh'
    },
    bottomInfo: {
        position: 'fixed',
        width: 'inherit',
        maxWidth: '31vw',
        height: 'inherit'
    },
    bottomInfoIcon: {
        position: 'relative',
        outline: 'none!important'
    }
};
  
const mapStateToProps = state => {
    return {
        ...state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeBigComponent: (component) => {
            dispatch({
                type: 'CHANGE_BIG_COMPONENT',
                component: component
            })
        }
    }
}

interface Props {
    changeBigComponent: any,
    classes: {
        bottomInfoWrapper: string,
        bottomInfo: string,
        bottomInfoIcon: string
    }
}

class PlannerNav extends Component<Props> {

    handleChange = (event, value) => {
        if ( value == 'new' ) {
            this.props.changeBigComponent(<NewActivity />)
        } else if ( value == 'settings' ) {
            this.props.changeBigComponent(<Settings />)
        } else if ( value == 'full' ) {
            this.props.changeBigComponent(<GoogleMap />)
        }
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.bottomInfoWrapper}>
                <BottomNavigation onChange={this.handleChange} className={classes.bottomInfo} showLabels>
                    <BottomNavigationAction label="New Activity" value="new" className={classes.bottomInfoIcon} icon={<Icon1 />} />
                    <BottomNavigationAction label="Settings" value="settings" className={classes.bottomInfoIcon} icon={<Icon2 />} />
                    <BottomNavigationAction label="Move" value="move" className={classes.bottomInfoIcon} icon={<Icon3 />} />
                    <BottomNavigationAction label="Fullscreen" value="full" className={classes.bottomInfoIcon} icon={<Icon4 />} />
                </BottomNavigation>
            </div>
        );
    }
}

PlannerNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PlannerNav))