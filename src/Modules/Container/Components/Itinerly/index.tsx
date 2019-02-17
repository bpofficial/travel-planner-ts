import React from "react";

import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { createStyles, withStyles } from "@material-ui/core/styles";
import PaperLeft from "Modules/Paper/Components/PaperLeft/";
import PaperRight from "Modules/Paper/Components/PaperRight/";

import theme from "../../../../Themes/";
/**
 * Infomation about this component wooooooo
 */
const styles = (/*{ palette, spacing }: Theme*/) => createStyles({
    paperLeft: {
        borderRadius: "0px",
        float: "left",
        height: "100%",
        margin: "auto",
        maxHeight: "80vh",
        maxWidth: "32vw",
        minHeight: "80vh",
        minWidth: "32vw",
        overflow: "auto",
        padding: "2vh",
        position: "relative",
        width: "100%",
    },
    paperRight: {
        borderRadius: "0px",
        float: "right",
        // height: '100%',
        margin: "auto",
        maxHeight: "80vh",
        maxWidth: "55vw",
        minHeight: "80vh",
        minWidth: "55vw",
        // padding: '2vh',
        // width: '100%',
    },
    root: {
        flexGrow: 1,
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingTop: "1%",
        position: "relative",
    },
    titleOutline: {
        borderColor: theme.palette.primary.main,
        borderRadius: "5px",
        borderStyle: "dashed",
        display: "inline-block",
        paddingLeft: "5px",
        paddingRight: "5px",
    },
});

interface IProps {
    classes: {
        root: string,
        paperLeft: string,
        paperRight: string,
        titleOutline: string,
    };
}

class Itinerary extends React.Component<IProps> {
    public render(): JSX.Element {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Typography component="h2" variant="display3" gutterBottom={true}>
                    <div className={classes.titleOutline}>Travel</div>&nbsp;Planner
                </Typography>
                <Grid>
                    <PaperLeft className={classes.paperRight} />
                    <PaperRight className={classes.paperLeft} />
                </Grid>
            </div>
        );
    }
}
/** @component */
export default withStyles(styles, { withTheme: true })(Itinerary);
