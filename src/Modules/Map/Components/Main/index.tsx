import Grid from "@material-ui/core/Grid";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React from "react";

interface IProps {
    receiveGoogle: any;
    mapClick: any;
    markers: any;
    google: any;
    styles: {
        width: string,
        height: string,
        borderRadius: string,
    };
}

class MapContainer extends React.Component<IProps> {

    constructor(props) {
        super(props);
        if (this.props.receiveGoogle) {
            this.props.receiveGoogle(this.props.google.maps);
        }
    }

    public shouldComponentUpdate(nextProps): any {
        if (nextProps !== this.props) {
            return true;
        }
    }

    public render(): JSX.Element {
        const style = {
            container: {
                cursor: "default",
                position: "relative",
            },
            map: {
                // optional chaining not supported by linter
                // tslint:disable
                borderRadius: this.props.styles?.borderRadius || "0px",
                cursor: "default",
                maxHeight: this.props.styles?.height || "80vh",
                maxWidth: this.props.styles?.width || "55vw",
                minHeight: this.props.styles?.height || "80vh",
                minWidth: this.props.styles?.width || "55vw",
                // tslint:enable
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
                    // tslint:disable-next-line: jsx-no-multiline-js
                    center={{
                        lat: this.props.markers[this.props.markers.length - 1].lat,
                        lng: this.props.markers[this.props.markers.length - 1].lng,
                    }}
                    onClick={this.mapClicked}
                    draggableCursor="default"
                >
                    {// tslint:disable-next-line: jsx-no-multiline-js
                        this.props.markers.map((data: any, _I: any) => {
                            return(
                                <Marker
                                    key={_I}
                                    title={data.description}
                                    name={data.description}
                                    position={{lat: data.lat, lng: data.lng}}
                                />
                            );
                        })
                    }
                </Map>
            </Grid>
        );
    }

    private mapClicked = (_MP: object, _M: object, _C: {[key: string]: any}) => {
        this.props.mapClick(_C.latLng.toJSON());
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCevzJfMGttcDCL-_pGFI8PN4pOiYK2Fxc",
})(MapContainer);
