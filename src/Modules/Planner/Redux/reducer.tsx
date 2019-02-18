import React from "react";

import New from "Modules/Forms/Components/Destination/New/";
// import { GoogleMap } from "Modules/Map/";
import { Planner } from "Modules/Planner/";

const componentReducer = (state = { bigComponent: <New />, littleComponent: <Planner /> }, action) => {
    switch (action.type) {
        case "CHANGE_BIG_COMPONENT":
            state.bigComponent = action.component;
            return {
                ...state,
            };
        case "CHANGE_LITTLE_COMPONENT":
            state.littleComponent = action.component;
            return {
                ...state,
            };
        default:
            return state;
    }
};

import initialState from "Modules/Planner/Redux/InitalStates/TripData";
import TripAction from "Modules/Planner/Types/Actions/TripData";
const tripDetails = (state = initialState, action: TripAction) => {
    switch (action.type) {
        case "NEW_DESTINATION":
            return [
                ...state,
                {
                    currency: action.data.location.currency,
                    date: {
                        from: action.data.location.date.from,
                        timezone: action.data.location.date.timezone,
                        to: action.data.location.date.to,
                    },
                    details: action.data.notes,
                    geo: {}, // {...new Geographic(action.data.location.geo)},
                    name: action.data.location.name,
                    price: action.data.location.price,
                    stay: {
                        accommodation: [],
                        attractions: [],
                        travel: [],
                    },
                },
            ];
        case "NEW_ACTIVITY":
            state[action.data.id].stay[action.type] = [
                ...state[action.data.id].stay[action.type],
                {
                    currency: action.data.location.currency,
                    date: {
                        from: action.data.location.date.from,
                        timezone: action.data.location.date.timezone,
                        to: action.data.location.date.to,
                    },
                    details: action.data.notes,
                    geo: {}, // {...new Geographic(action.data.location.geo)},
                    name: action.data.location.name,
                    price: action.data.location.price,
                    stay: {
                        accommodation: [],
                        attractions: [],
                        travel: [],
                    },
                },
            ];
            return state;
        default:
            return state;
    }
};

export { componentReducer, tripDetails };
