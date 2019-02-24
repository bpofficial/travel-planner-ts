import { combineReducers } from "redux";

import * as FormReducers from "Modules/Forms/Redux/reducer";
import * as PlannerReducers from "Modules/Planner/Redux/reducer";

export default combineReducers({
    ...PlannerReducers,
    ...FormReducers,
});
