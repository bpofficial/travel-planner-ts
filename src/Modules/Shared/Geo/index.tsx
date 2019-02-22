import { dispatch } from "react-redux";

export const reverseGeo = (data, google, createMarker: boolean) => {
    const Geo = new google.maps.Geocoder();
    const location = {
        address: data.description,
        lat: 0,
        lng: 0,
        place_id: data.place_id,
    };
    return new Promise((resolve, reject) => {
        Geo.geocode({placeId: data.place_id}, (results, status) => {
            if (status === "OK") {
                location.lat = results[0].geometry.location.toJSON().lat;
                location.lng = results[0].geometry.location.toJSON().lng;
                if (createMarker) { dispatch({type: "NEW_MARKER", data: location}); }
                resolve(location);
            } else {
                reject(new Error("Had some trouble."));
            }
        });
    });
};
