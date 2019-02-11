import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import theme from '../../../../Themes/';

const StyledButton = withStyles({
    root: {
        borderRadius: 2,
        height: 48,
        //maxWidth: '5vw',
        //width: '100%',
        padding: '0 30px',
        float: 'right',
        margin: 'auto 4vw auto auto',
        pointerEvents: 'none',
        cursor: 'not-allowed'
    },
    outlinedPrimary: {
        border: '1px solid '+ theme.palette.primary.main,
        color: '#757575'
    }
})(Button);

export default class Budget extends React.Component<{ info: string }> {
    public render(): JSX.Element {
        return (
            <StyledButton variant="outlined" color="primary">
                ${this.props.info}
            </StyledButton>
        )
    }
}

/*
    float: right;
    height: 48px;
    margin: auto 4vw auto auto;
    cursor: not-allowed;
    float: right;
    padding: 0 30px;
    border-radius: 2px;
    pointer-events: none;
*/