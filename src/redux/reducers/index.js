import { combineReducers } from "redux";
import ExperienceReducer from "./ExperienceReducer";

const reducers = combineReducers({
    amount: ExperienceReducer
})

export default reducers