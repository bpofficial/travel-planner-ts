import { combineReducers } from 'redux';

import componentChange from './componentChange';
import tripData from './tripData';

export default combineReducers({
    componentChange,
    tripData
})