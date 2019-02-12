interface Geo {
    lat?: number,
    lng?: number,
    place_id?: string,
    address: string
};

class Geographic {

    private lat: number | undefined;
    private lng: number | undefined;
    private place_id: string;
    private address: string;

    constructor( data: Geo ) {
        if ( typeof data.lat != undefined && data.lat && data.lng != undefined && data.lng ) {
            this.lat = data.lat;
            this.lng = data.lng;
            //find place id and address with google api using lat & lng
        } else {
            this.lat = undefined;
            this.lng = undefined;
        }

        if ( typeof data.place_id != undefined && data.place_id && this.lat != undefined && this.lng != undefined && this.lat && this.lng) {
            /**
             * Pl
             */
        }

        if ( typeof data.address != undefined && data.address) {

        }
    }
}