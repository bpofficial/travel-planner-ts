import React from 'react';

import { GoogleMap } from 'Modules/Map/';
import { Planner } from 'Modules/Planner/';
const componentReducer = (state = { bigComponent: <GoogleMap />, littleComponent: <Planner /> }, action) => {
    switch (action.type) {
        case 'CHANGE_BIG_COMPONENT':
            state.bigComponent = action.component
            return {
                ...state
            }
        case 'CHANGE_LITTLE_COMPONENT':
            state.littleComponent = action.component
            return {
                ...state
            }
        default:
            return state
    }
}

import initialState from 'Modules/Planner/Redux/InitalStates/TripData';
import TripAction from 'Modules/Planner/Types/Actions/TripData';
const tripDetails = (state = initialState, action: TripAction) => {
    switch (action.type) {
        case 'NEW_DESTINATION':
            return [
                ...state,
                {
                    name: action.data.location.name,
                    price: action.data.location.price,
                    currency: action.data.location.currency,
                    date: {
                        from: action.data.location.date.from,
                        to: action.data.location.date.to,
                        timezone: action.data.location.date.timezone
                    },
                    geo: {},//{...new Geographic(action.data.location.geo)},
                    stay: {
                        attractions: [],
                        accommodation: [],
                        travel: []
                    },
                    details: action.data.notes
                }
            ]
        case 'NEW_ACTIVITY':
            state[action.data.id].stay[action.type] = [
                ...state[action.data.id].stay[action.type],
                {
                    name: action.data.location.name,
                    price: action.data.location.price,
                    currency: action.data.location.currency,
                    date: {
                        from: action.data.location.date.from,
                        to: action.data.location.date.to,
                        timezone: action.data.location.date.timezone
                    },
                    geo: {},//{...new Geographic(action.data.location.geo)},
                    details: action.data.notes
                }
            ]
            return state
        default:
            return state
    }
}

export { componentReducer, tripDetails } 