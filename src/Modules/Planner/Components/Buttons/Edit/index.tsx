import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import React from "react";

const StyledButton = withStyles({
    root: {
        borderRadius: 2,
        float: "right",
        height: 32,
        margin: "auto 3.5vw auto auto",
        maxWidth: 50,
        padding: "0 30px",
        width: "100%",
    },
})(Button);

export default class EditButton extends React.Component<{}> {
    public render() {
        return (
            <StyledButton variant="contained" color="default">
                Edit
            </StyledButton>
        );
    }
}
