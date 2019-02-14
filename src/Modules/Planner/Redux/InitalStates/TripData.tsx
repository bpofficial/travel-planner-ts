import Destination from 'Modules/Planner/Types/Destination';

const initialState = [
    {
        name: 'Tokyo',
        price: 1000,
        currency: 'AUD',
        details: '',
        date: {
            from: '',
            to: '',
            timezone: ''
        },
        geo: {
            lat: 111,
            lng: 222,
            place_id: 'xxxx',
            address: ''
        },
        stay: {
            attractions: [
                {
                    name: 'Disney Land',
                    price: 79,
                    currency: 'AUD',
                    date: {
                        from: '',
                        to: '',
                        timezone: ''
                    },
                    geo: {
                        lat: 35.6323727,
                        lng: 139.8792115,
                        place_id: 'ChIJsRvb8BN9GGARjpFu5GhbkPM',
                        address: '1-1 Maihama, Urayasu-shi, Chiba-ken 279-0031, Japan'
                    }
                }
            ], //Places being visited
            accommodation: [
                {
                    name: 'Disney Land Resort',
                    price: 379,
                    currency: 'AUD',
                    date: {
                        from: '',
                        to: '',
                        timezone: ''
                    },
                    geo: {
                        lat: 35.6323727,
                        lng: 139.8792115,
                        place_id: 'ChIJsRvb8BN9GGARjpFu5GhbkPM',
                        address: '1-1 Maihama, Urayasu-shi, Chiba-ken 279-0031, Japan'
                    }
                }
            ], //Hotels etc
            travel: [
                {
                    name: 'Brisbane to Tokyo (Narita)',
                    price: 679,
                    currency: 'AUD',
                    date: {
                        from: '',
                        to: '',
                        timezone: ''
                    },
                    movement: {
                        from: {
                            geo: {
                                lat: 111,
                                lng: 222,
                                place_id: '(brisbane airport)',
                                address: 'brisbane airport international terminal'
                            }
                        },
                        to: {
                            geo: {
                                lat: 111,
                                lng: 222,
                                place_id: '(narita airport)',
                                address: 'narita airport international terminal'
                            }
                        }
                    }
                }
            ],
        }
    } as Destination
];

export default initialState;