import React from 'react';
//import GoogleMap from '../../functional/map/';
//import Planner from '../../functional/Planner/';

const initialState = [
    {
        bigComponent: <div>Hi</div>,//<GoogleMap />,
        littleComponent: <div>also hi</div>//<Planner />
    }
]

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_BIG_COMPONENT':
            state[0].bigComponent = action.component
            return {
                ...state
            }
        case 'CHANGE_LITTLE_COMPONENT':
            state[0].littleComponent = action.component
            return {
                ...state
            }
        default:
            return state
    }
}
  
export default reducer