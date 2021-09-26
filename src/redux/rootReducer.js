import { combineReducers } from "redux";
import portfolioReducer from './portfolio/portfolioReducer'
import aboutReducer from './about/aboutReducer'
import sliderDataReducer from "./slider/sliderReducer";


const rootReducer = combineReducers({
    data: portfolioReducer,
    about: aboutReducer,
    slider: sliderDataReducer
});

export default rootReducer