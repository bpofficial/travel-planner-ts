import React from 'react';
import { 
    Map, 
    InfoWindow, 
    Marker, 
    GoogleApiWrapper } 
from 'google-maps-react';
import Grid from '@material-ui/core/Grid';

class MapContainer extends React.Component<{ google: any[] }> {
    public render(): JSX.Element {
        const style = {
            map: {
                minWidth: '55vw',
                maxWidth: '55vw',
                minHeight: '80vh', 
                maxHeight: '80vh',
                position: 'relative'
            },
            container: {
                position: 'relative'
            }
        }
        return (
            <Grid container spacing={0} style={{ height: '100%' }}>
                <Map google={this.props.google} containerStyle={style.container} zoom={14} style={style.map} centerAroundCurrentLocation>
                    
                </Map>
            </Grid>
        )
    }
}

/** @component */
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCevzJfMGttcDCL-_pGFI8PN4pOiYK2Fxc'
})(MapContainer);