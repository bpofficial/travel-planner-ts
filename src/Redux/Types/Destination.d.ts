import Geographic from './Geographic';

type Destination = {
    name: string,
    price: number,
    currency: string,
    details: string,
    date: {
        from?: Date | string,
        to?: Date | string,
        timezone?: string
    },
    geo: Geographic,
    stay: {
        attractions?: {
            [key:number]: {
                name: string,
                price: number,
                currency: string,
                date?: {
                    from?: Date | string,
                    to?: Date | string,
                    timezone?: string
                },
                geo?: Geographic,
                details?: string
            }
        },
        accommodation?: {
            [key:number]: {
                name: string,
                price: number,
                currency: string,
                date?: {
                    from?: Date | string,
                    to?: Date | string,
                    timezone?: string
                },
                geo?: Geographic,
                details?: string
            }
        },
        travel?: {
            [key:number]: {
                name: string,
                price: number,
                currency: string,
                date?: {
                    from?: Date | string,
                    to?: Date | string,
                    timezone?: string
                },
                movement?: {
                    from?: {
                        geo?: Geographic
                    },
                    to?: {
                        geo?: Geographic
                    }
                },
                details?: string
            }
        }
    }
}

export default Destination;