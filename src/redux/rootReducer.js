import { combineReducers } from "redux";
import portfolioReducer from './portfolio/portfolioReducer'


const rootReducer = combineReducers({
    data: portfolioReducer
});

export default rootReducer