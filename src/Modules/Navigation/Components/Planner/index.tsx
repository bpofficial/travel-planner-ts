import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { createStyles, withStyles } from "@material-ui/core/styles";
import Icon1 from "@material-ui/icons/Add";
import Icon2 from "@material-ui/icons/Settings";
import Icon3 from "@material-ui/icons/SwapVert";
import Icon4 from "@material-ui/icons/ZoomIn";
import React, { Component } from "react";
import { connect } from "react-redux";

import NewActivity from "Modules/Forms/Components/Destination/New/";
import GoogleMap from "Modules/Map/Components/Main/";
import Settings from "Modules/Settings/Components/Main/";

import theme from "../../../../Themes/";

const styles = (/*{ palette, spacing }: Theme*/) => createStyles({
    bottomInfo: {
        height: "inherit",
        maxWidth: "31vw",
        position: "fixed",
        width: "inherit",
    },
    bottomInfoIcon: {
        outline: "none!important",
        position: "relative",
    },
    bottomInfoWrapper: {
        bottom: 0,
        height: "8vh",
        margin: "auto auto auto -2vh",
        position: "absolute",
        // margin: 'auto auto 0px auto',
        width: "100%",
    },
    icon: {
        color: theme.palette.primary.main,
    },
});

const mapStateToProps = (state) => {
    return {
        ...state,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        changeBigComponent: (component) => {
            dispatch({
                component,
                type: "CHANGE_BIG_COMPONENT",
            });
        },
    };
};

interface IProps {
    changeBigComponent: any;
    classes: {
        bottomInfoWrapper: string,
        bottomInfo: string,
        bottomInfoIcon: string,
        icon: string,
    };
}

class PlannerNav extends Component<IProps> {

    public handleChange = (_E, value) => {
        if ( value === "new" ) {
            this.props.changeBigComponent(<NewActivity />);
        } else if ( value === "settings" ) {
            this.props.changeBigComponent(<Settings />);
        } else if ( value === "map" ) {
            this.props.changeBigComponent(<GoogleMap />);
        }
    }

    public render() {
        const { classes } = this.props;

        return (
            <div className={classes.bottomInfoWrapper}>
                <BottomNavigation onChange={this.handleChange} className={classes.bottomInfo} showLabels={true}>
                    <BottomNavigationAction
                        label="New Activity"
                        value="new"
                        className={classes.bottomInfoIcon}
                        icon={<Icon1 className={classes.icon} />}
                    />
                    <BottomNavigationAction
                        label="Settings"
                        value="settings"
                        className={classes.bottomInfoIcon}
                        icon={<Icon2 className={classes.icon} />}
                    />
                    <BottomNavigationAction
                        label="Calendar"
                        value="calendar"
                        className={classes.bottomInfoIcon}
                        icon={<Icon3 className={classes.icon} />}
                    />
                    <BottomNavigationAction
                        label="Map"
                        value="map"
                        className={classes.bottomInfoIcon}
                        icon={<Icon4 className={classes.icon} />}
                    />
                </BottomNavigation>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PlannerNav));
