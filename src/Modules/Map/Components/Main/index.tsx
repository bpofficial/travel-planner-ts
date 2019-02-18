import Grid from "@material-ui/core/Grid";
import {
    GoogleApiWrapper,
    Map } from "google-maps-react";
import React from "react";

interface IProps {
    google: any;
    styles: {
        width: string,
        height: string,
        borderRadius: string,
    };
}

class MapContainer extends React.Component<IProps> {
    public render(): JSX.Element {
        const style = {
            container: {
                position: "relative",
            },
            map: {
                borderRadius: this.props.styles.borderRadius || "0px",
                maxHeight: this.props.styles.height || "80vh",
                maxWidth: this.props.styles.width || "55vw",
                minHeight: this.props.styles.height || "80vh",
                minWidth: this.props.styles.width || "55vw",
                position: "relative",
            },
        };
        return (
            <Grid container={true} spacing={0} style={{ height: "100%" }}>
                <Map
                    google={this.props.google}
                    containerStyle={style.container}
                    zoom={14}
                    style={style.map}
                    centerAroundCurrentLocation={true}
                />
            </Grid>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: "AIzaSyCevzJfMGttcDCL-_pGFI8PN4pOiYK2Fxc",
})(MapContainer);
