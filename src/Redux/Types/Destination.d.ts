type Destination = {
    name: string,
    price: number,
    currency: string,
    details?: string,
    date: {
        from?: string,
        to?: string,
        timezone?: string
    },
    geo: {
        lat?: number,
        lng?: number,
        place_id?: string,
        address?: string
    },
    stay: {
        attractions?: {
            [key:number]: {
                name: string,
                price: number,
                currency: string,
                date?: {
                    from?: string,
                    to?: string,
                    timezone?: string
                },
                geo?: {
                    lat?: number,
                    lng?: number,
                    place_id?: string,
                    address?: string
                }
            }
        },
        accommodation?: {
            [key:number]: {
                name: string,
                price: number,
                currency: string,
                date?: {
                    from?: string,
                    to?: string,
                    timezone?: string
                },
                geo?: {
                    lat?: number,
                    lng?: number,
                    place_id?: string,
                    address?: string
                }
            }
        },
        travel?: {
            [key:number]: {
                name: string,
                price: number,
                currency: string,
                date?: {
                    from?: string,
                    to?: string,
                    timezone?: string
                },
                movement?: {
                    from?: {
                        geo?: {
                            lat: number,
                            lng: number,
                            place_id?: string,
                            address?: string
                        }
                    },
                    to?: {
                        geo?: {
                            lat: number,
                            lng: number,
                            place_id?: string,
                            address?: string
                        }
                    }
                },
                details: {}
            }
        }
    }
}

export default Destination;