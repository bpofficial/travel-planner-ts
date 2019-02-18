import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import React from "react";
import theme from "../../../../Themes/";
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const StyledButton = withStyles({
    outlinedPrimary: {
        border: "1px solid " + theme.palette.primary.main,
        color: "#757575",
    },
    root: {
        borderRadius: 2,
        cursor: "not-allowed",
        float: "right",
        height: 48,
        // maxWidth: '5vw',
        margin: "auto 4vw auto auto",
        padding: "0 30px",
        pointerEvents: "none",
        // width: '100%',
    },
})(Button);


export default class Budget extends React.Component<{ info: string }> {
    public render(): JSX.Element {
        return (
            <StyledButton variant="outlined" color="primary">
                ${this.props.info}
            </StyledButton>
        );
    }
}
