import { combineReducers } from 'redux';

import * as PlannerReducers from 'Modules/Planner/Redux/reducer';

export default combineReducers({
    ...PlannerReducers
})