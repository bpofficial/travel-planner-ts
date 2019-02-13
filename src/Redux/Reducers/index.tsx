import { combineReducers } from 'redux';

import componentChange from './componentChange';
import tripData from './tripData';
import newTripComponent from './newTripComponent';

export default combineReducers({
    componentChange,
    tripData,
    newTripComponent
})