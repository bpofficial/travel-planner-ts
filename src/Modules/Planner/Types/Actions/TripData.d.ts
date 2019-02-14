import Destination from '../Destination'

type TripAction = {
    type: string,
    data: {
        id: number | '',
        notes: string,
        location: Destination
    }
}

export default TripAction