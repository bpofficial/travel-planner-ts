import React from 'react';
import { 
    Map, 
    InfoWindow, 
    Marker, 
    GoogleApiWrapper } 
from 'google-maps-react';
import Grid from '@material-ui/core/Grid';

interface Props {
    google: any,
    styles: {
        width: string,
        height: string,
        borderRadius: string
    }
}

class MapContainer extends React.Component<Props> {
    public render(): JSX.Element {
        const style = {
            map: {
                minWidth: this.props.styles.width || '55vw',
                maxWidth: this.props.styles.width || '55vw',
                minHeight: this.props.styles.height || '80vh', 
                maxHeight: this.props.styles.height ||'80vh',
                borderRadius: this.props.styles.borderRadius || '0px',
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