import { combineReducers } from "redux";
import portfolioReducer from './portfolio/portfolioReducer'
import aboutReducer from './about/aboutReducer'


const rootReducer = combineReducers({
    data: portfolioReducer,
    about: aboutReducer
});

export default rootReducer