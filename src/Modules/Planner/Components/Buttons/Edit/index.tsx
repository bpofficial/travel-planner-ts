import React from 'react'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles({
    root: {
        borderRadius: 2,
        height: 32,
        maxWidth: 50,
        width: '100%',
        padding: '0 30px',
        float: 'right',
        margin: 'auto 3.5vw auto auto'
    }
})(Button);

export default class EditButton extends React.Component<{}> {
    render() {
        return (
            <StyledButton variant="contained" color="default">
                Edit
            </StyledButton>
        )
    }
}
